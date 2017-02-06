import React, { PropTypes } from 'react';

const UserDetails = (user) =>
  (
    <div>
      {!!user.score && <li className="list-group-item"><h3>Очки: {user.score}</h3></li>}
      <li className="list-group-item"> <img src={user.info.avatar_url} className="img-rounded img-responsive"/></li>
      {user.info.name && <li className="list-group-item">Имя: {user.info.name}</li>}
      <li className="list-group-item">Логин: {user.info.login}</li>
      {user.info.location && <li className="list-group-item">Местоположение: {user.info.location}</li>}
      {user.info.company && <li className="list-group-item">Компания: {user.info.company}</li>}
      <li className="list-group-item">Подписчики: {user.info.followers}</li>
      <li className="list-group-item">Подписан: {user.info.following}</li>
      <li className="list-group-item">Публичные репозитории: {user.info.public_repos}</li>
      {user.info.blog && <li className="list-group-item">Блог: <a href={user.info.blog}> {user.info.blog}</a></li>}
    </div>
  )

UserDetails.propTypes = {
  score: PropTypes.number,
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    public_repos: PropTypes.number.isRequired
  })
}

export default UserDetails;
