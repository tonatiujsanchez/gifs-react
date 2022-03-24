import { useState, useEffect } from "react"
import { getGif } from "../helpers/getGifs"



const useFetchGifs = (category ) => {


    const [ state, setState ] = useState({
        data: [],
        loading: true
    })

    useEffect(()=>{

        getGif(category).then(
            gifs => {

                setTimeout(()=>{
                    setState( {
                        data: [ ...gifs ],
                        loading: false
                    })
                },1500)

            } 
        )

    },[ category ])



  return state // { data:[], loading: true }
}

export default useFetchGifs