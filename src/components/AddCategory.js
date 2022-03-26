import { useState } from "react"
import PropTypes from 'prop-types'

const AddCategory = ({ addNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('')


    const handleChange = ( e ) => {
        setInputValue( e.target.value )
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        
        if( inputValue.trim() !== '' ){
            addNewCategory( inputValue )
            setInputValue('')        
        }
        
    }


  return (
    <form onSubmit={ handleSubmit }>
        <p>{ inputValue }</p>
        <input 
            type="text" 
            value={ inputValue } 
            onChange={ handleChange }
            placeholder= 'One Punch, Samurai X, Dragon Ball, Etc'/>
    </form>
  )
}

AddCategory.propTypes ={
    addNewCategory: PropTypes.func.isRequired
}

export default AddCategory