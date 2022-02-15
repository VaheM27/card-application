import '../header/header.css'
const Header = (props) => {
  const {createCard ,sortCard } = props

    return (
        <div className='header'>
            <button className='button' onClick={() => createCard()}>Add Block</button>
            <button className='button' onClick={() => sortCard()}>Sort Block</button>
        </div>

    )

}
export default(Header)