import FormContato from './FormContato'
import styles from './css/FormContatoArticle.module.css'

function FormContatoArticle(){

    return (
        <section className={styles.form}>
            <h1>Quer saber mais? Entre em contato hoje!</h1>
            <div>
                <div>
                    <img draggable="false" src="/sent_message_article.png" alt="Contact message"/>
                </div>
                <FormContato/>
            </div>
        </section>
    )
}

export default FormContatoArticle