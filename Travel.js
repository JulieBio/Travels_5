import React, { Component } from 'react';

const Travel = ({ destination, country, distance, image }) => (
  <figure>
    <img src={image} alt={destination} />
    <figcaption>
      <blockquote>{destination}</blockquote>
      <blockquote>{country}</blockquote>
      <blockquote>{distance}</blockquote>
    </figcaption>
  </figure>
);

export default Travel;
