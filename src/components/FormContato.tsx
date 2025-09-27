
import "./css/FormContato.css"

function FormContato(){
    return (<>
        <div className="formcontato">
            <form action="" name="form">
                <label>Nome: <input type="text"/></label>
                <label>Email: <input type="text"/></label>
                <label className="checkbox-label">
                    <input type="checkbox" className="checkbox-input"/>
                    Tomou uma decisão por Jesus hoje? Clique aqui.
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>

    </>)
}

export default FormContato