/* eslint-disable react/prop-types */
import location from "../src/assets/location.svg";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`../src/assets/${props.image}`} className="card--image" />
      <div className="card--text">
        <div className="card--location">
          <img src={location} className="card--location_icon" />
          <p className="card--location_text">{props.location}</p>
          <a
            href={props.googleMap}
            target="_blank"
            className="card--location_link"
            rel="noreferrer"
          >
            View on Google maps
          </a>
        </div>
        <p className="card--title">{props.title}</p>

        <p className="card--description">{props.description}</p>
      </div>
    </div>
  );
}
