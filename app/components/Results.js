import React, { PropTypes } from 'react';
import styles from '../styles';
import { Link } from 'react-router';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import MainContainer from './MainContainer';
import Loading from './Loading';

const StartOver = () => {
  return (
    <div className='col-sm-12' style={styles.space}>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-danger'>Начать Сначала</button>
      </Link>
    </div>
  )
}

const Tie = (props) => {
  return (
    <MainContainer>
      <h1>`It's a Tie!`</h1>
      <StartOver />
    </MainContainer>
  )
}

const Results = (props) => {
  if (props.isLoading === true) {
    return <Loading speed={100} text='Загрузка' />
  }
  if (props.scores[0] === props.scores[1]) {
    return (
      <Tie scores={props.scores} playersInfo={props.playersInfo}/>
    )
  }
  const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  const losingIndex = winningIndex === 0 ? 1 : 0;

  return (
    <MainContainer>
      <h1>Результаты</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Победитель'>
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Проигравший'>
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
}
Results.propTypes = {
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

export default Results;
