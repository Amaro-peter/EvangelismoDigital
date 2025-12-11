import { useEffect, useRef } from "react";
import styles from "./css/FormContatoError.module.css";

interface Props {
    message?: string;
    onClose: () => void;
    autoDismissMs?: number;
}

const DEFAULT_AUTO_DISMISS_MS = 6000;

export default function FormContatoError({ 
    message = "Erro ao enviar formulário. Tente novamente mais tarde.", 
    onClose, 
    autoDismissMs = DEFAULT_AUTO_DISMISS_MS 
}: Props) {
    const onCloseRef = useRef(onClose);
    useEffect(() => { 
        onCloseRef.current = onClose; 
    }, [onClose]);
    
    useEffect(() => {
        const t = setTimeout(() => onCloseRef.current(), autoDismissMs);
        return () => clearTimeout(t);
    }, [autoDismissMs]);

    return (
        <div className={styles.errorOverlay} role="alert" aria-live="assertive" aria-label="Erro no envio">
            <div className={styles.errorCard}>
                <div className={styles.errorIcon} aria-hidden="true">
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11" stroke="#e74c3c" strokeWidth="2" fill="rgba(0,0,0,0.02)"/>
                        <path d="M12 8v5M12 16h.01" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                </div>

                <h3 className={styles.errorTitle}>Erro no envio</h3>
                <p className={styles.errorText}>{message}</p>

                <div className={styles.errorActions}>
                    <button className={styles.btnClose} onClick={onClose} aria-label="Fechar mensagem de erro">Fechar</button>
                </div>
            </div>
        </div>
    );
}