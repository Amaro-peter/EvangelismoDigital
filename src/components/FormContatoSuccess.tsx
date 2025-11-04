import { useEffect, useRef } from "react";
import "./css/FormContatoSuccess.css";
import type { FormContatoData } from "./FormContato";

interface Props {
    data: FormContatoData | null;
    onClose: () => void;
    autoDismissMs?: number;
}

const DEFAULT_AUTO_DISMISS_MS = 4000;

export default function FormContatoSuccess({ data, onClose, autoDismissMs = DEFAULT_AUTO_DISMISS_MS }: Props) {
    const onCloseRef = useRef(onClose);
    useEffect(() => { 
        onCloseRef.current = onClose; 
    }, [onClose]);
    
    useEffect(() => {
        if (!data) return;
        const t = setTimeout(() => onCloseRef.current(), autoDismissMs);
        return () => clearTimeout(t);
    }, [data, onClose, autoDismissMs]);

    if (!data) return null;

    return (
        <div className="fc-success-overlay" role="dialog" aria-live="polite" aria-label="Confirmação de envio">
            <div className="fc-success-card">
                <div className="fc-success-icon" aria-hidden="true">
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11" stroke="var(--primary2)" strokeWidth="2" fill="rgba(0,0,0,0.02)"/>
                        <path d="M7 12.5l2.5 2.5L17 8" stroke="var(--white)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <h3 className="fc-success-title">Mensagem enviada</h3>
                <p className="fc-success-text">Recebemos seus dados com sucesso. Obrigado!</p>

                <div className="fc-success-actions">
                    <button className="fc-btn-close" onClick={onClose} aria-label="Fechar confirmação">Fechar</button>
                </div>
            </div>
        </div>
    );
}