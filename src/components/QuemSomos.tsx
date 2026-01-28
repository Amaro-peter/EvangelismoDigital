import { quemSomosText } from "../templates/QuemSomosText";
import styles from './css/QuemSomos.module.css';

const QuemSomos = () => {
  return (
    <div className="container">
      <div className={styles.card}>
        <div className={styles.cardContent + " d-flex flex-column justify-content-center mt-4 mb-4"}>
          <h2 className={styles.title + " text-center"}>Quem Somos</h2>
          <p className={styles.text}>{quemSomosText}</p>
          <div className="d-flex justify-content-center">
            <a href="/?section=contato" className="btn btn-primary cta">Fale conosco</a>
          </div>
        </div>
        <aside className={styles.side} aria-hidden>
          <img src="/FaithTech Logo Text - Grey Orange (1) 1.svg" alt="logo" className={styles.logoImg} />
        </aside>
      </div>
    </div>
  );
}

export default QuemSomos;