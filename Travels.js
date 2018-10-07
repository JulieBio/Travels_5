import React, { Component } from "react";

const quotes = [
      {
        destination :"Tadoussac",
        country : "Canada",
        distance : "5.500 km",
        image : "https://i.postimg.cc/QxmZ0QrS/tadoussac.jpg",
      },
      {
        destination : "St Petersburg",
        country : "Russie",
        distance : "2.300 km",
        image : "https://i.postimg.cc/KjQpr5gM/St_Petersburg.jpg",
      },
      {
        destination :"Prague",
        country : "République Tchèque",
        distance : "1100 km",
        image : "https://i.postimg.cc/90XJMqNF/Prague.jpg",
      },
      {
        destination :"Paglieta",
        country : "Italie",
        distance : "1050 km",
        image : "https://i.postimg.cc/jdFZx26t/Paglieta4.jpg",
      },
      {
        destination :"Genève",
        country : "Suisse",
        distance : "150 km",
        image : "https://i.postimg.cc/SskGTM47/Geneve.jpg",
      },
    ]

  const Quotes = () => (
    <div>
    {quotes.map(quote => (
    <div>
    <p key={quote.destination}>{quote.destination}</p>
    <p key={quote.country}>{quote.country}</p>
    <p key={quote.distance}>{quote.distance}</p>
    <img key={quote.image} src={quote.image} />
    </div>
    ))}
    </div>
    );
    
    export default Quotes;

