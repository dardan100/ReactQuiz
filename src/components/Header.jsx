import img from "./reactLogo.png";

export default function Header() {
  return (
    <header className="app-header">
      <img src={img} alt="React logo" />
      <h1>The React Quiz</h1>
    </header>
  );
}
