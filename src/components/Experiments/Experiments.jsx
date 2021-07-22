import React from 'react';
import clip from '../../images/production ID_3998263.mp4';
import Poster from '../../images/bgHeroPoster.jpg';

//poster={Poster}

const VideoBckg = ({ children }) => {
  return (
    <>
      <div className='video-container'>
        <video className="hero-video" autoPlay loop muted>
          <source src={clip} type="video/mp4" />
          <source src={clip} type="video/ogg" />
        </video>
      </div>
      {children}
    </>
  );
};

export default VideoBckg;

// import React from 'react';
// import { Container, Row } from 'react-bootstrap';
// // import StyledBackground from '../Image/HeroImg';
// import Hero from './Hero-component';
// import VideoBckg from '../Experiments/Experiments';

// const PricesWelcomeBg = () => {
//   return (
//     <Container fluid>
//       <Row id="hero" style={{ position: 'relative', color: 'white' }}>
//         {/* <StyledBackground
//         id='home-mobile'
//           className="hero-bg"
//           filename="bgHero.jpg"
//           alt="Woman getting massage"
//           bgContent={<Hero />}
//         /> */}
//         <div id="home-desktop">
//           <VideoBckg />
//           <Hero />
//         </div>
//       </Row>
//     </Container>
//   );
// };

// export default PricesWelcomeBg;
