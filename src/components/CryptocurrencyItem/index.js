// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {each} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = each
  return (
    <li className="list-con">
      <div className="first-con-item">
        <img src={currencyLogo} alt={currencyName} className="img-con" />
        <p>{currencyName}</p>
      </div>
      <div className="sec-con-item">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
