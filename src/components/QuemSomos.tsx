import { quemSomosText } from "../templates/QuemSomosText";
import styles from './css/QuemSomos.module.css';

const QuemSomos = ({
  href
} : { 
  href?: string 
}) => {
  return (
    <div className="container">
      <div
        className={styles.card}
        style={{ position: 'relative', overflow: 'visible', paddingBottom: 40 }}
      >
        <div className={styles.cardContent + " d-flex flex-column justify-content-center mt-4"}>
          <h2 className={styles.title + " text-center"}>
            Quem Somos
          </h2>
          <p className={styles.text}>{quemSomosText}</p>
        </div>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: -35, 
          }}
        >
          <a href={href ? href : "#"} aria-label="Ir para baixo">
            <img
              src="/arrow_down.svg"
              alt="seta para baixo"
              style={{
                width: 80,
                height: 80,
                display: 'block'
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default QuemSomos;