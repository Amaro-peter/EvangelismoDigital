import { ReactNode } from "react"
import styles from './css/CallToAction.module.css';

interface CallToActionProps {
    title: string
    children: ReactNode
}

const CallToAction = ({ title, children }: CallToActionProps) => {
    return (
        /* O Wrapper cuida do fundo infinito (full width) */
        <div className={styles.wrapper}>
            {/* O Container cuida do alinhamento do texto */ }
            <div className={styles.container}>
                <h3 className={styles.title}>
                    {title}
                </h3>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default CallToAction