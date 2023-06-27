import logo from "../public/globe.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} className="navbar--logo" />
      <p className="navbar--text">Travel Journal</p>
    </nav>
  );
}
