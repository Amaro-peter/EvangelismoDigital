import { quemSomosText } from "../templates/QuemSomosText";

const QuemSomos = () => {
  return (
    <div className="container">
      <h1>Quem Somos</h1>
      <p>
        {quemSomosText}
      </p>
    </div>
  );
}

export default QuemSomos;