import './App.css'
import { useState } from 'react';
import Header from './components/header/header'
import Main from './components/main/main'
import Instructions from './components/instructions/instructions'
import Footer from './components/footer/footer'

const App = () => {
  const [block, setBlock] = useState([]);
    const createCard = () => {
        const num = Math.ceil(Math.random() * 100000)
        const id = Math.ceil(Math.random() * 10)
        setBlock((prevState) => {
            return [
                ...prevState, {
                    id: num,
                    num: id
                }
            ]
        })
    }
    console.log(block);

    const sortCard = () => {
        setBlock([...block.sort((a, b) => {
                return a.num - b.num
            })])
        console.log(block);
    }
    
    const deleteCard = (id) => {
        setBlock([...block.filter((c) => c.id !== id)])
    }

return(
    <div className='App'>
      <Header createCard = {createCard} sortCard = {sortCard}/>
      <Main deleteCard = {deleteCard} block = {block} />
      <Instructions/>
      <Footer/>
    </div>
)
}

export default App;
