import axios from 'axios';

export function BTC() {
  axios.create({
    baseURL: 'https://www.mercadobitcoin.net/api/BTC/ticker/',
  })
}

export function ETH() {
  axios.create({
    baseURL: 'https://www.mercadobitcoin.net/api/ETH/ticker/',
  })
}