
import "./css/FormContato.css"

function FormContato(){
    return (<>
        <div className="formcontato">
            <form action="" name="form">
                <label>Nome: <input type="text"/></label>
                <label>Email: <input type="text"/></label>
                <button type="submit">Enviar</button>
            </form>
        </div>

    </>)
}

export default FormContato