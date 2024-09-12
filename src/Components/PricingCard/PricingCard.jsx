import CardListItem from "../CardListItem/CardListItem"
import './PricingCard.css'


const PricingCard = ({isVisible, isBackgroundColored, isColorBlack, title, price, cardItems  }) => {
  return (
    <>
    <div className="Mk-card col-lg-6 col-xl py-5  ">
        <div className="border border-light-subtle overflow-hidden position-realtive">
        <div className="py-2 px-4 position-relative" style={{ backgroundColor: isBackgroundColored ? '#3fbbc0' : 'var(--bs-gray-150)',   }}>
            <span className="Mk-Adv fs-6" style={{display : isVisible ? 'block' : 'none'}}>Advanced</span>
            <p className="fs-6 p-2 text-center m-0" style={{ color : !isColorBlack ? 'black' : 'white' }}>{title}</p>
        </div>
        <h4 className="text-center fs-2 mt-3" style={{fontFamily : 'var(--second-font)'}}><sub>$</sub>{price}<span className="fs-6" style={{color : 'var( --bs-gray-500)',fontFamily : 'var(--second-font)'}}> /month</span></h4>
        <ul className="text-center fs-3 m-0 list-unstyled p-3">
            {cardItems.map(item => (
                <CardListItem key={item.id} isLineThrough={item.isLineThrough} text={item.text}/>
            ))}
        </ul>
        <div className="py-3 px-4 d-block m-auto" style={{backgroundColor : 'var(--bs-gray-150)'}}>
            <button className="Mk-BuyNow">
                Buy Now
            </button>
        </div>
        </div>
    </div>
    </>
  )
}

export default PricingCard