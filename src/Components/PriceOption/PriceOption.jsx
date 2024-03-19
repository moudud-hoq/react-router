import { PropTypes } from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, id, price, features } = option;
  return (
    <div className="bg-slate-50 rounded-2xl m-4 drop-shadow-xl">
      <div className=" p-4 m-4">
        <div>
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

        {/* ====================== */}
        <div>
          {" "}
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
        <div className="flex justify-center bg-green-700 rounded-b-xl mt-4
        ">
            <button className=" font-bold text-xl p-3 text-white">Select</button>
        </div>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
