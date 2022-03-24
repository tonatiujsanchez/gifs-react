import GifGridItem from "./GifGridItem"
import useFetchGifs from "../hooks/useFetchGifs"
import Loading from "./Loading"


const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs( category )

  return (
      <div className="category">
        <h3>{ category }</h3>
        { loading 
            ? <Loading />
            : <div className="card-grid">
                { data.map( image =>  <GifGridItem key={ image.id } { ...image } /> ) }
             </div>
        }
      </div>
    )
}

export default GifGrid