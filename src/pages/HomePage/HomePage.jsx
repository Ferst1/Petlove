
import React from 'react';
import '../../styles/Home.scss';
import img from '../../../images/userhomepaje.jpg';

const HomePage = () => {
  return (
    <div className='hero'>
      <section className='home'>
        <div className='section_first'>
          <h1>Take good <span>care</span> of your small pets</h1>
          <div>
            <p>Choosing a pet for your home is a choice that is meant to enrich 
            your life with immeasurable joy and tenderness.</p>
          </div>
        </div>
        <div className='section_second'>
          <img src={img} alt='home_page'/>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
