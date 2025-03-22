import "../Styles/header.css";

export default function Header({ search, onSearch }) {
  return (
    <div>
      <div className="header">
        <Logo />
        <Search search={search} onSearch={onSearch} />
        <Nav />
      </div>
      <div className="horizontal__line"></div>
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <h2>
        <span>🎦</span>Cinema
      </h2>
    </div>
  );
}

function Search({ search, onSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search by Movie title ...."
        className="search__input"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

function Nav() {
  return (
    <div className="nav__links">
      <ul>
        <li>About Me</li>
        <li>Linkedine</li>
        <li>Github</li>
      </ul>
    </div>
  );
}
