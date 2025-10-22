
import "./css/FormContato.css"
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formContatoSchema = z.object({
  name: z.string().min(1, "Digite um nome válido."),
  email: z.string().email("Digite um email válido."),
  acceptJesus: z.boolean().optional(),
});

function FormContato(){
type FormContatoData = z.infer<typeof formContatoSchema>;

    const { register, handleSubmit, formState:{ errors }, } = useForm<FormContatoData>({
    resolver: zodResolver(formContatoSchema),
    });

    function handleFormContato(data: FormContatoData){
    }

    return (<>
        <div className="formcontato">
            <form onSubmit={handleSubmit(handleFormContato)} name="form">
                <label>Nome: <input type="text" {...register('name') }/></label>
                {<p className="error-message">{errors.name ? errors.name.message : "\u00A0"}</p>}
                <label>Email: <input type="email" {...register('email')} /></label>
                {<p className="error-message">{errors.email ? errors.email.message : "\u00A0"}</p>}
                <label className="checkbox-label">
                    <input type="checkbox" className="checkbox-input" {...register('acceptJesus')}/>
                    Tomou uma decisão por Jesus hoje? Clique aqui.
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>

    </>)
}

export default FormContato


