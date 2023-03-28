import Listing from "./components/Listing";
import "./App.css";
import etsyItems from "./store/etsy";

const items = etsyItems;

function App() {
  return <Listing items={items} />;
}

export default App;
