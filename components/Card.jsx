import test from "../src/assets/library.png";
import location from "../src/assets/location.svg";

export default function Card() {
  return (
    <div className="card">
      <img src={test} alt="" />
      <div>
        <img src={location} />
        <p>Taipei</p>
        <a href="#">View on Google maps</a>
      </div>
    </div>
  );
}
