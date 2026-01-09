import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './css/FindNearestChurch.module.css';
import { API_URL } from '../config/api';

// --- Types ---
interface ChurchLocation {
    latitude: number;
    longitude: number;
    name?: string;
}

// Schema for form validation using Zod
const searchSchema = z.object({
    email: z.string().min(1, "Digite um email.").email("Digite um email válido.").transform(val => val.trim().toLowerCase()),
    cep: z.string().min(1, "Digite seu CEP.").transform(val => val.replace(/\D/g, '')).refine(val => val.length === 8, "CEP deve ter 8 dígitos.")
});

type SearchFormData = z.infer<typeof searchSchema>;

function FindNearestChurch() {
    const [churches, setChurches] = useState<ChurchLocation[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState<string | null>(null);
    
    // Refs for Map
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<google.maps.Map | null>(null);
    const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);

    // Temporarily disable dynamic map functionality
    const SHOW_STATIC_MAP = true; // Set to false when backend is ready

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<SearchFormData>({
        resolver: zodResolver(searchSchema),
        mode: 'onBlur'
    });

    // --- Google Maps Initialization & Update ---
    useEffect(() => {
        if (SHOW_STATIC_MAP) return; // Skip map initialization if showing static map

        // Initialize map only once if the API is loaded and ref exists
        if (mapRef.current && !mapInstanceRef.current && window.google?.maps) {
            mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
                center: { lat: -14.235, lng: -51.925 },
                zoom: 4,
                disableDefaultUI: false,
                streetViewControl: false,
                mapTypeControl: false,
                mapId: 'DEMO_MAP_ID', // Replace with your actual Map ID from Google Cloud Console
            });
        }

        // Update markers when churches state changes
        if (mapInstanceRef.current && churches.length > 0 && window.google?.maps?.marker) {
            // Clear existing markers
            markersRef.current.forEach(marker => marker.map = null);
            markersRef.current = [];

            const bounds = new window.google.maps.LatLngBounds();

            churches.forEach((church, index) => {
                const position = { lat: church.latitude, lng: church.longitude };
                
                const marker = new window.google.maps.marker.AdvancedMarkerElement({
                    position,
                    map: mapInstanceRef.current,
                    title: church.name || `Igreja Próxima ${index + 1}`,
                });

                markersRef.current.push(marker);
                bounds.extend(position);
            });

            // Fit map to show both markers
            mapInstanceRef.current.fitBounds(bounds);

            // Optional: Adjust zoom if bounds are too tight
            window.google.maps.event.addListenerOnce(mapInstanceRef.current, "idle", () => { 
                if (mapInstanceRef.current && mapInstanceRef.current.getZoom()! > 16) { 
                    mapInstanceRef.current.setZoom(16); 
                } 
            });
        }
    }, [churches, SHOW_STATIC_MAP]);


    // --- Form Handling ---
    const onSubmit = async (data: SearchFormData) => {
        if (SHOW_STATIC_MAP) {
            setApiError("Funcionalidade de busca em desenvolvimento. Visualize as igrejas no mapa abaixo.");
            return;
        }

        setIsLoading(true);
        setApiError(null);
        setChurches([]);

        try {
            const response = await fetch(`${API_URL}/churches/find-nearest`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Falha ao buscar igrejas. Verifique os dados e tente novamente.');
            }

            const result: ChurchLocation[] = await response.json();

            if (Array.isArray(result) && result.length >= 2) {
                setChurches(result.slice(0, 2));
            } else {
                throw new Error('Não encontramos igrejas próximas suficientes nesta região.');
            }

        } catch (err) {
            console.error(err);
            setApiError(err instanceof Error ? err.message : "Ocorreu um erro inesperado.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Encontre uma igreja perto de você</h1>
            
            <div className={styles.contentWrapper}>
                {/* Left Side: Form */}
                <div className={styles.formSection}>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
                        <label className={styles.label}>
                            Email
                            <input 
                                type="email" 
                                placeholder="seu@email.com"
                                className={styles.input}
                                {...register('email')} 
                            />
                            <span className={styles.errorMessage}>
                                {errors.email?.message || "\u00A0"}
                            </span>
                        </label>

                        <label className={styles.label}>
                            CEP
                            <input 
                                type="text" 
                                placeholder="00000-000"
                                maxLength={9}
                                className={styles.input}
                                {...register('cep')} 
                            />
                             <span className={styles.errorMessage}>
                                {errors.cep?.message || "\u00A0"}
                            </span>
                        </label>

                        {apiError && (
                            <div className={styles.errorMessage} style={{ textAlign: 'center' }}>
                                {apiError}
                            </div>
                        )}

                        <button 
                            type="submit" 
                            className={styles.submitButton}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Buscando...' : 'Buscar Igrejas'}
                        </button>
                    </form>
                </div>

                {/* Right Side: Map */}
                <div className={styles.mapSection}>
                    {SHOW_STATIC_MAP ? (
                        <iframe 
                            src="https://www.google.com/maps/d/embed?mid=1xG-2y7rA7aH7oO115uYYH8S5oXACMsA&ehbc=2E312F"
                            className={styles.mapContainer}
                            style={{ border: 0, width: '100%', height: '100%' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa de Igrejas"
                        />
                    ) : (
                        <div ref={mapRef} className={styles.mapContainer}>
                            {!churches.length && !isLoading && !mapInstanceRef.current && (
                                <div className={styles.mapPlaceholder}>
                                    <p>Preencha os dados para visualizar as igrejas no mapa.</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default FindNearestChurch;