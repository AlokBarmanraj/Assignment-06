import ActiveUsers from "../Components/DaisyUi/ActiveUsers";
import DaisyNav from "../Components/DaisyUi/DaisyNav";
import DigitalTools from "../Components/DaisyUi/DigitalTools";
import Footer from "../Components/DaisyUi/Footer";
import HeroSec from "../Components/DaisyUi/HeroSec";
import PricingCard from "../Components/DaisyUi/PricingCard";
import Steps from "../Components/DaisyUi/Steps";
import WorkFlow from "../Components/DaisyUi/WorkFlow";
import "./App.css";

const allPricesCard = async () => {
  const res = await fetch(
    "https://gist.githubusercontent.com/AlokBarmanraj/f416485cad57beb14e29eb87b040c613/raw/152e35c7d965dca3e4e79f9c3227b97cca55c3ee/video-editing-tools.json",
  );
  return res.json();
};
const pricesCard = allPricesCard();

function App() {
  return (
    <>
      <DaisyNav></DaisyNav>
      <HeroSec></HeroSec>
      <ActiveUsers></ActiveUsers>
      <DigitalTools pricesCard={pricesCard}/>
      <Steps></Steps>
      <PricingCard></PricingCard>
      <WorkFlow></WorkFlow>
      <Footer></Footer>
    </>
  );
}

export default App;
