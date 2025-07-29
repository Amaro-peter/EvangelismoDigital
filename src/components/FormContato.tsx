
import "./css/FormContato.css"

function FormContato(){
    return (<>
        <div className="modal-body">
            <form action="" name="form">
                <fieldset className="form-group">
                    {/* Formulário de contato */}
                    <div className="form-group row">
                        <label htmlFor="nome" className="col-form-label col-lg-2">Nome: </label>
                        <br/>
                        <div className="col-lg-10">
                            <input type="text" id="nome" name="nome" className="form-control"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="email" className="col-form-label col-lg-2">Email: </label>
                        <br/>
                        <div className="col-lg-10">
                            <input type="text" id="email" name="email" className="form-control"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-lg-6 offset-lg-2">
                            <button type="button" className="btn btn-primary">Enviar</button>
                        </div>
                    </div>

                </fieldset>
            </form>
        </div>

    </>)
}

export default FormContato