import { sendSubscriptionForm } from "../utils/utils"

const Modal = ({ show, close, name, email })=> {

    const submitForm = ()=> {
        sendSubscriptionForm(name, email)
        close()
    }

    return (
        <div className={`modal ${ show ? "show" : "" }`}>
            <div className="content">
                <h2>{name},</h2>
                <p>Al suscribirte aceptas recibir promociones y las últimas novedades sobre nuestros cursos</p>
                
                <div className="button-row">
                    <button onClick={()=> submitForm()}>Aceptar</button>
                    <button className="secondary-btn" onClick={()=> close()}>Cancelar</button>
                </div>
            </div>
        </div>
    )

}

export default Modal