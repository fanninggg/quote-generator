import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


import Generator from "./generator";

var generatorElement = document.getElementById('generator')

if (generatorElement) {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Generator />,
      generatorElement.appendChild(document.createElement('div')),
    )
  })
}
