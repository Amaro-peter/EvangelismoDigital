import FormContato from './FormContato'
import styles from './../components/css/FormContatoHome.module.css'

function FormContatoHome(){

    return (
        <section className={styles.form}>
            <h1>Gostaria de entrar em contato conosco?</h1>
            <div>
                <div>
                    <img draggable="false" src="sent_message.png" alt="Contact message"/>
                </div>
                <FormContato/>
            </div>
        </section>
    )
}

export default FormContatoHome