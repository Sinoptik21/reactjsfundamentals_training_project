import React from 'react';
import { Link } from 'react-router';
import MainContainer from './MainContainer';

class Home extends React.Component {
  render() {
    return (
      <MainContainer>
        <h1>Github Битва</h1>
        <p className='lead'>Кто же сильнейший?</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Начать</button>
        </Link>
      </MainContainer>
    )
  }
};

export default Home;
