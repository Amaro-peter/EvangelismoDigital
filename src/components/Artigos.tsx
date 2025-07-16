import './css/CardArtigo.css'
import './css/Artigos.css'
import CardArtigo from "./CardArtigo.tsx"

const Artigos = () => {
  const lista: number[] = [1,2,3,4,5,6]
  
  return (<>
    <h1 className="title">Artigos</h1>
    <p className='subtitle'>Clique para ler!</p>

    <div className="container-sm d-lg-flex align-items-between flex-wrap justify-content-between">

      {lista.map((v, i) => 
        <div className="card">
          <CardArtigo key={i} title="Title" pre="Kosdjaiosahduiashdiosaj"/>
        </div>
      )} 
    </div>
       
  </>)
}

export default Artigos