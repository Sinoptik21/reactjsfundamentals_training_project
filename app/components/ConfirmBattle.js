import React, { PropTypes } from 'react';
import styles from '../styles';
import { Link } from 'react-router';
import UserDetailsWrapper from './UserDetailsWrapper';
import UserDetails from './UserDetails';
import MainContainer from './MainContainer';
import Loading from './Loading';

const ConfirmBattle = (props) => {
  return props.isLoading === true
    ? <Loading speed={500} text='Секунду'  />
    : <MainContainer>
        <h1>Подтверждение игроков</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetailsWrapper header='Игрок 1'>
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header='Игрок 2'>
            <UserDetails info={props.playersInfo[1]} />
          </UserDetailsWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Начать Битву!</button>
          </div>
          <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'>Выбрать игроков заново</button>
            </Link>
          </div>
        </div>
      </MainContainer>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

export default ConfirmBattle;
