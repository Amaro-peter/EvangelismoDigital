
interface Chamado {
  title: string;
  description: string;
}

const Invitation=  ({ chamado } :{ chamado: Chamado }) => {
  return (
    <div className="container">
      <h2>{chamado.title}</h2>
      <p>{chamado.description}</p>
    </div>
  );
};

export default Invitation;