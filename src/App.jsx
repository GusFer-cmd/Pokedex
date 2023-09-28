import './App.css'
import Pokedex from './components/Pokedex/Pokedex'
import Pokemon from './components/Pokemon/Pokemon'

function App() {
  return (
    <>
      <div className='main'>
        <Pokemon />
        <Pokedex />
      </div>
    </>
  )
}

export default App
