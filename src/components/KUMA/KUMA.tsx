import { useState } from "react";
import "./styles/KUMA.css";

function KUMA() {
  const kaomoji = ["ʕ•ᴥ•ʔ", "ʕノ•ᴥ•ʔノ", "ᕦʕ•ᴥ•ʔᕤ", "ʕꈍᴥꈍʔ", "ʕノ)ᴥ(ヾʔ"];
  const [kaomojiIndex, setKaomojiIndex] = useState(0);

  return (
    <div
      className="kuma"
      onMouseEnter={() => {
        setKaomojiIndex(
          kaomojiIndex + 1 >= kaomoji.length ? 0 : kaomojiIndex + 1
        );
      }}
    >
      <p className="face">{kaomoji[kaomojiIndex]}</p>
    </div>
  );
}

export default KUMA;
