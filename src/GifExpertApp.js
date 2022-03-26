import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"



const GifExpertApp = ({ defaultCategories = [] }) => {

    const [ categories, setCategories ] = useState(defaultCategories)

    const addNewCategory = ( newCategory ) =>{
        setCategories( [ newCategory, ...categories ] )
    }


    return (
      <>
        <h1 className="title">Gifs App</h1>
        <AddCategory addNewCategory={ addNewCategory } />
        <ol>
            {
                categories.map( category => (
                    <GifGrid key={ category } category={ category } />
                    ))
            }
        </ol>
      </>
    )
  }
  
  export default GifExpertApp