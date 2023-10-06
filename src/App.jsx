import './assets/css/App.css'

import Header from './components/Header'
import Form from './components/Form'

function App() {
  return (
    <>
      <Header></Header>

      <main className="main-container">
        <Form></Form>
      </main>

      <footer>
        <p>Aprende React - ADL - FER-G10</p>
      </footer>
    </>
  )
}

export default App
