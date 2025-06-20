import './styles/App.css'
import Text from './components/Text'
import Form from './components/Form'

function App() {

  return (
    <>
      <div className='form_container'>
        <Text as="h3" text="Complete sus datos para Ingresar" />
        <Form />
      </div>
    </>
  )
}

export default App
