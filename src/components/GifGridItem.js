
const GifGridItem = ({ title, img }) => {


  return (
    <div className="card">
        <img src={ img } alt={ title } className="animate__animated animate__fadeIn" />
        <p className="animate__animated animate__fadeIn">{ title }</p>
    </div>
  )
}

export default GifGridItem