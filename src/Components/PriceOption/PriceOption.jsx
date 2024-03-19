import { PropTypes } from "prop-types";
const PriceOption = ({ option }) => {
  const { name, id, price, features } = option;
  return (
    <div className="bg-rose-50 rounded-2xl m-4">
      <div className=" border-2 border-orange-400 p-4 m-4">
        <h1>
          <b>Serial No:</b> {id}
        </h1>
        <h1>
          <b>Name: </b>
          {name}
        </h1>
        <h1>
          <b>Price: </b>
          {price}
        </h1>
      </div>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
