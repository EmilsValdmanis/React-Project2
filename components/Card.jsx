import test from "../src/assets/library.png";
import location from "../src/assets/location.svg";

export default function Card() {
  return (
    <div className="card">
      <img src={test} className="card--image" />
      <div className="card--text">
        <div className="card--location">
          <img src={location} className="card--location_icon" />
          <p className="card--location_text">Taipei</p>
          <a href="#" className="card--location_link">
            View on Google maps
          </a>
        </div>
        <p className="card--title">Not just a library</p>
        <p className="card--description">
          This was one of my favorite places to study and just chill out in
          Taipei. Hidden inside of the Songhan Creative Park, this is a quite
          and aesthetic space that is filled with art + architecture books and
          magazines.
        </p>
      </div>
    </div>
  );
}
