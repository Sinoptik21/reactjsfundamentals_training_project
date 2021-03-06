import axios from 'axios';

const id = "YOUR_CLIENT_ID";
const sec = "YOUR_SECRET_ID";
const param = "?client_id=" + id + "&client_secret=" + sec;

const getUserInfo = (username) => axios.get(`https://api.github.com/users/${username + param}`);

const getRepos = (username) => axios.get(`https://api.github.com/users/${username}/repos${param}&per_page=100`);

const getTotalStars = (repos) => repos.data.reduce((prev, current) => prev + current.stargazers_count, 0);

const getPlayersData = (player) =>
  getRepos(player.login)
    .then(getTotalStars)
    .then((totalStars) => {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    });

const calculateScores = (players) =>
  [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ];

const helpers = {
  getPlayersInfo: (players) =>
    axios.all(players.map((username) => getUserInfo(username)))
    .then((info) => info.map((user) => user.data))
    .catch((err) => console.warn('Ошибка в getPlayersInfo: ', err)),
  battle: (players) => {
    const playerOneData = getPlayersData(players[0]);
    const playerTwoData = getPlayersData(players[1]);
    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch((err) => console.warn('Ошибка в функции битвы: ', err))
  }
};

export default helpers;
