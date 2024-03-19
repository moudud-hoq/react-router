import { PropTypes } from "prop-types";
const PriceOption = ({ option }) => {
  const { name, id, price, features } = option;
  return (
    <div>
      <h2>
        <span className="text-5xl">{price}</span>
        <span className="text-5xl">/mon</span>
      </h2>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
