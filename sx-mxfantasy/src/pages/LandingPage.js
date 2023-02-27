import React from 'react';
import { Typography } from '@mui/material';
import { OutlinedCard } from '../components/card';
import Header from '../components/Header/Header';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './LandingPage.css';
import TablePage from '../components/Body/TablePage';
import Body from '../components/Body/Body';
import ChatBox from '../components/Body/ChatBox';
import Footer from '../components/Footer/Footer';

const sports = [
  { id: 1, name: 'Formula 1', imageUrl: 'https://source.unsplash.com/featured/?formula1', eventsUrl: 'https://example.com/formula1-events' },
  { id: 2, name: 'NASCAR', imageUrl: 'https://source.unsplash.com/featured/?nascar', eventsUrl: 'https://example.com/nascar-events' },
  { id: 3, name: 'MotoGP', imageUrl: 'https://source.unsplash.com/featured/?motogp', eventsUrl: 'https://example.com/motogp-events' },
  { id: 4, name: 'Supercross', imageUrl: 'https://source.unsplash.com/featured/?supercross', eventsUrl: 'https://example.com/supercross-events' },
  { id: 5, name: 'Motocross', imageUrl: 'https://source.unsplash.com/featured/?motocross', eventsUrl: 'https://example.com/motocross-events' },
  { id: 6, name: 'Surfing', imageUrl: 'https://source.unsplash.com/featured/?surfing', eventsUrl: 'https://example.com/surfing-events' },
  { id: 7, name: 'Nascar', imageUrl: 'https://source.unsplash.com/featured/?nascar', eventsUrl: 'https://example.com/nascar-events' },
  { id: 8, name: 'Indycar', imageUrl: 'https://source.unsplash.com/featured/?indycar', eventsUrl: 'https://example.com/indycar-events' },
];

const LandingPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <div className="landing-page">
      {/* Header */}
      <Header />

      {/* Sports section */}
      <div className="sports-section">
        <Typography variant="h5" align="center" gutterBottom>
          Sports
        </Typography>

        <Slider {...settings}>
          {sports.map((sport) => (
            <OutlinedCard key={sport.id} imageUrl={sport.imageUrl} name={sport.name} />
          ))}
        </Slider>
      </div>

      <div style={{ borderTop: "1px solid black" }}></div>

      {/* Body section */}
      <div className="SportsBlock">
        <Body />
      </div>

      <div style={{ borderTop: "1px solid black" }}></div>

      {/* Table section */}
      <div className="table-section">
        <TablePage />
      </div>

      {/* Chatbox section */}
      <div className="table-section">
        <ChatBox />
      </div>
      

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;