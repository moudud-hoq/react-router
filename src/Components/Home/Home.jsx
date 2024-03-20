import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div  className="bg-slate-50 h-96">
      <Header></Header>
      <h2>This is the home Area</h2>

        <Outlet></Outlet>

      <Footer className="mt-16"/>
    </div>
  );
};

export default Home;
