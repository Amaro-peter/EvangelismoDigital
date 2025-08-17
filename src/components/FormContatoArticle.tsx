import FormContato from './FormContato'
import './../components/css/FormContatoArticle.css'

function FormContatoArticle(){

    return (<>
        <h1>Quer saber mais? Entre em contato hoje !</h1>
        <div>
          <div>
                <img className="contact-image" draggable="false" src="/sent_message_article.png" alt="Contact message"/>
          </div>
          <FormContato/>
        </div>
    </>)
}

export default FormContatoArticle