import { useState } from "react"
import PropTypes from 'prop-types'

const AddCategory = ({ addNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()

        if( inputValue.trim() === '' ){
            console.log( 'El campo es obligatorio' )
            return
        }

        addNewCategory( inputValue )
        setInputValue('')        
    }


  return (
    <form onSubmit={ handleSubmit }>
        <input 
            type="text" 
            value={ inputValue } 
            onChange={ ( e )=> setInputValue( e.target.value ) }
            placeholder= 'One Punch, Samurai X, Dragon Ball, Etc'/>
    </form>
  )
}

AddCategory.propTypes ={
    addNewCategory: PropTypes.func.isRequired
}

export default AddCategory