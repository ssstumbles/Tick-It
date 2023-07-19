import Header from './Components/Header'
import Main from './Components/Main'
import './App.css'

function App() {

  return (
    <div className="app">
      <div className="app-header">
        <Header />
      </div>

      <main className="app-main">
        <Main />
      </main>

    </div>
  )
}

export default App
