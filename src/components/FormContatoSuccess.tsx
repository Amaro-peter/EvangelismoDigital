import { useEffect, useRef } from "react";
import styles from "./css/FormContatoSuccess.module.css";
import { FormContatoData } from "./FormContato";

interface Props {
    data: FormContatoData;
    onClose: () => void;
    autoDismissMs?: number;
}

const DEFAULT_AUTO_DISMISS_MS = 5000;

export default function FormContatoSuccess({ 
    data, 
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
        <div className={styles.fcSuccessOverlay} role="alert" aria-live="polite" aria-label="Formulário enviado com sucesso">
            <div className={styles.fcSuccessCard}>
                <div className={styles.fcSuccessIcon} aria-hidden="true">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>

                <h3 className={styles.fcSuccessTitle}>Formulário enviado!</h3>
                <p className={styles.fcSuccessText}>Seus dados foram recebidos com sucesso.</p>

                <div className={styles.fcSuccessMeta}>
                    <div><strong>Nome:</strong> {data.name} {data.lastName}</div>
                    <div><strong>Email:</strong> {data.email}</div>
                </div>

                <div className={styles.fcSuccessActions}>
                    <button className={styles.fcBtnClose} onClick={onClose} aria-label="Fechar mensagem de sucesso">OK</button>
                </div>
            </div>
        </div>
    );
}