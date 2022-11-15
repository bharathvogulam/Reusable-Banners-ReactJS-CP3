// Write your code here.
import './index.css'

const BannerCard = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails

  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button className="show-more-btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCard
