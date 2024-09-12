import PricingCard from '../PricingCard/PricingCard';
import {cardsData} from './../../Data/PricingCardData'

const Pricing = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {cardsData.map((card) => (
            <PricingCard
              key={card.id}
              isVisible={card.isVisible}
              isBackgroundColored={card.isBackgroundColored}
              isColorBlack={card.isBackgroundColored}
              title={card.title}
              price={card.price}
              cardItems={card.CardListItem}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
