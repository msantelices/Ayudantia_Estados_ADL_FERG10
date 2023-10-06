import { useState } from "react"

import { validateName, validateEmail } from "../utils/utils"
import Modal from "./Modal"

const Form = ()=> {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [show, setShow] = useState(false)

    const subscribe = (e)=> {
        e.preventDefault()

        if(!validateName(name)) {
            setError("* El nombre contiene caracteres inválidos")
            return
        }

        if(!validateEmail(email)) {
            setError("* El correo no es válido")
            return
        }
        
        setShow(true)
        setError("")
    }

    const closeModal = ()=> {
        setName("")
        setEmail("")
        setError("")
        setShow(false)
    }
    
    return (
        <div className="card">
            <h1 className="title">¿Quieres aprender React?</h1>
            <p className="subtitle">Suscríbete y conoce todos nuestros cursos</p>

            <form className="subscription-form" onSubmit={(e)=> subscribe(e)}>
                <div className="input-row">
                    <label htmlFor="name">Nombre</label>
                    <input 
                        id="name" 
                        type="text"
                        placeholder="Tu nombre"
                        required
                        onChange={(e)=> setName(e.target.value)}
                        value={name}
                    />

                </div>

                <div className="input-row">
                    <label htmlFor="email">Correo</label>
                    <input 
                        type="email"
                        id="email"
                        placeholder="Tu correo"
                        required 
                        onChange={(e)=> setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className="button-row">
                    <button>Suscríbete</button>
                </div>

                <p className="error">{error}</p>
            </form>

            <Modal 
                show={show} 
                name={name}
                email={email}
                close={closeModal}></Modal>
        </div>
    )
}

export default Form