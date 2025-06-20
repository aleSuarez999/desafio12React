import React, { useEffect, useState } from 'react'
import Text from './Text'
import Button from './Button'
import "../styles/Form.css"


function Form() {

    const [values, setValues] = useState({
        name: "",
        edad: 0
        }
    )


    const [errors, setErrors] = useState({
        name: "",
        edad: 0
    })

    
    useEffect(() => {
      // se ejecuta cuando cambia values , que lo hace cambiar el change
      setErrors({
            name: values.name.length <= 3 && values.name ? "El nombre tiene que tener mas de 3 car": ""
      })
    }, [values])


    const [mensaje, setMensaje] = useState("")


    const handleChange = e => {
        setValues({
            ...values, // trae valores actuales
            [e.target.name]: e.target.value // pisa el valor con el del campo de texto
        })
   
    }

    const handleSubmit = e =>
    {
        e.preventDefault()
    
        if (parseInt(values.edad) < 18 && values.name.length >= 3)
        {
            setMensaje(`Hola ${values.name}, eres muy joven para usar esta aplicación`)
        }
        else if (parseInt(values.edad) >= 18 && values.name.length >= 3)
        {
            setMensaje(`Bienvenido ${values.name}, gracias por usar nuestra aplicación`)
        }
        else
        {
            setMensaje("")
            }
        
    }


    return (
    <>
        <div className='form-container' >
            <form action="" onSubmit={handleSubmit} >
                <div>
                    <Text as="label" text="Ingrese su nombre" htmlFor="name" />
                    <Text as="input" id='name' name='name' autoComplete='true' onChange={handleChange} />
                    <Text as="span" text={errors.name} className="d-block color-error" />
                    <Text as="label" text="Ingrese su edad" htmlFor="edad" />
                    <Text id="edad" name="edad" as="input" type="number" autoComplete="true" value={values.edad}  onChange={handleChange}  />
                    <Button text="Verificar" color="secondary"  />
                </div>
            </form>
        </div>
        <div>
        {
            mensaje ? <Text as="h4" text={`${mensaje}`} /> : undefined
        }
        </div>
        
    </>
  )
}

export default Form


