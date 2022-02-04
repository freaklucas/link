import "./link-item.css";
import { FiX, FiClipboard } from "react-icons/fi";

export default function LinkItem() {
  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Link encurtado</h2>
        <button>
          <FiX size={28} color="#000" />
        </button>
      </div>
      <span>https://github.com</span>
      <button className="modal-link">
        https://git.com
        <FiClipboard size={20} color="#FFF" />
      </button>
    </div>
  );
}
