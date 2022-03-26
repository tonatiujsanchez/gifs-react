

import PropTypes from 'prop-types'


const GifGridItem = ({ title, img }) => {


  return (
    <div className="card animate__animated animate__fadeIn">
        <img src={ img } alt={ title } className="animate__animated animate__fadeIn" />
        <p className="animate__animated animate__fadeIn">{ title }</p>
    </div>
  )
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}


export default GifGridItem