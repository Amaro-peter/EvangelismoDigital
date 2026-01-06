import { ReactNode } from "react"
import styles from './css/CallToAction.module.css';

interface CallToActionProps {
    title: string
    children: ReactNode
}

const CallToAction = ({ title, children }: CallToActionProps) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                {title}
            </h3>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default CallToAction