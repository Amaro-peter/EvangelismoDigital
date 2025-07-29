import { articles } from '../pages/Articles';

type Chamado = typeof articles[keyof typeof articles]['chamado'];

const Invitation=  ({ chamado } :{ chamado: Chamado }) => {
  return (
    <div className="container">
      <h1>{chamado.title}</h1>
      <p>{chamado.description}</p>
    </div>
  );
};

export default Invitation;