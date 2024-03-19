import { PropTypes } from "prop-types";
import Feature from "../Feature/Feature";

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

        {/* ====================== */}
        <h2>
          <b>Features:</b>
        </h2>
        <ul className="list-disc px-4">
          {features.map((feature, idx) => (
            <li key={idx}>
              <Feature feature={feature} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
