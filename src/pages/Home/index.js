import "./home.css";
import { FiLink } from "react-icons/fi";

import Menu from "../../components/Menu/index";
import LinkItem from "../../components/LinkItem/index";

import { useState } from "react";

export default function Home() {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handleShortLink() {
    alert("Meu link: " + link);
    setShowModal(true);
  }
  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="Sujeito link logo" />
        <h1>SujeitoLink</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>
      <div className="area-input">
        <div>
          <FiLink size={28} color="#FFF" />
          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Cole aqui seu link..."
          />
        </div>
        <button onClick={handleShortLink}>Encurtar Link</button>
      </div>
      <Menu />

      {showModal && <LinkItem />}
    </div>
  );
}
