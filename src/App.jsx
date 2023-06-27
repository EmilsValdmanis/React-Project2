import "./App.css";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import data from "./data";

function App() {
  const cards = data.map((card) => (
    <Card
      key={card.image}
      image={card.image}
      title={card.title}
      location={card.location}
      googleMap={card.googleMap}
      description={card.description}
    />
  ));
  console.log(cards);
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
