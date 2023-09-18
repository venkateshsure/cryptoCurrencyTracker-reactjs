// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoList: [], isLoading: true}

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const camelCaseCryptoData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    // console.log(camelCaseData)
    this.setState({cryptoList: camelCaseCryptoData, isLoading: false})
  }

  getHeaderListItems = () => (
    <div className="fourth-con">
      <p className="coin-type">Coin Type</p>
      <div className="fifth-con">
        <p>EURO</p>
        <p className="usd">USD</p>
      </div>
    </div>
  )

  render() {
    const {cryptoList, isLoading} = this.state
    const loadValue = isLoading ? 'loader' : ''

    return (
      <div data-testid={loadValue} className="first-con">
        {isLoading ? (
          <Loader type="TailSpin" height={50} width={50} color="#092e33" />
        ) : (
          <div className="sec-con">
            <h1>Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="img"
            />
            <ul className="third-con">
              {this.getHeaderListItems()}
              {cryptoList.map(each => (
                <CryptocurrencyItem each={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
