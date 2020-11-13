import React from 'react'
import { RoundImage } from '../../styles/styles'

const Images = ({ images, variant }) => {
  return images.length < 2 ? (
    <RoundImage
      className="col-10 col-md-7 col-lg-12"
      src={images[0].fields.file.url}
    />
  ) : (
    <div className="mt-n5 mt-lg-auto">
      <div className={`row ${!variant && 'justify-content-end'}`}>
        <RoundImage
        className="col-6"
        src={images[0].fields.file.url}
        />
      </div>
      <div className={`row ${variant && 'justify-content-end'}`}>
        <RoundImage
        className="col-8"
        src={images[1].fields.file.url}
        />
      </div>
    </div>
  )
}

export default Images
