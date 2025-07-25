import FormContato from '../components/FormContato'
import './../components/css/FormContatoHome.css'

function FormContatoHome(){

    return (<>
        <h1>Gostaria de entrar em contato conosco?</h1>
        <div>
          <div>
              <img src="sent_message.png"/>
          </div>
          <FormContato/>
        </div>
    </>)
}

export default FormContatoHome