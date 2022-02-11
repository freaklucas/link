import "./home.css";
import { FiLink } from "react-icons/fi";

import Menu from "../../components/Menu/index";
import LinkItem from "../../components/LinkItem/index";

import { useState } from "react";

import api from "../../services/api";

import { saveLink } from "../../services/storeLinks";

export default function Home() {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });

      saveLink("@encurtaLink", response.data);

      setData(response.data);
      setShowModal(true);
      setLink("");
    } catch {
      alert("algo errado!");
      setLink("");
    }
    // setShowModal(true);
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

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
}
