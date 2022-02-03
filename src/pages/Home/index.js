import "./home.css";

import { FiLink } from "react-icons/fi";

export default function Home() {
  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="Sujeito link logo" />
        <h1>Sujeito Link</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>
      <div className="area-input">
        <div>
          <FiLink size={28} color="#FFF" />
          <input placeholder="Cole aqui seu link..." />
        </div>
        <button>Encurtar Link</button>
      </div>
    </div>
  );
}
