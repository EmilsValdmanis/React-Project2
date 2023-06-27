import "./App.css";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
// import data from "./data";

function App() {
  return (
    <div>
      <Navbar />
      <Card
        image="library.png"
        title="Not Just Library"
        location="Taipei"
        googleMap="https://g.page/NotJustLibrary?share"
        description="This was one of my favorite places to study and just chill out in Taipei. Hidden inside of the Songhan Creative Park, this is a quite and aesthetic space that is filled with art + architecture books and magazines."
      />
    </div>
  );
}

export default App;
