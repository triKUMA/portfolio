import { useState } from "react";
import "./styles/KUMA.css";

interface KUMAProps {
  className?: string;
}

function KUMA(props: KUMAProps) {
  const kaomoji = [
    "ʕ•ᴥ•ʔ",
    "ʕノ•ᴥ•ʔノ",
    "ᕦʕ•ᴥ•ʔᕤ",
    "ʕꈍᴥꈍʔ",
    "ʕノ)ᴥ(ヾʔ",
    "＼ʕ•ᴥ•ʔ／",
    "ʕ˵•ᴥ•˵ʔ",
    "ᕕʕ •ᴥ•ʔ୨",
    "ʕ；•`ᴥ•´ʔ",
    "┏ʕ •ᴥ•ʔ┛",
    "ʕ♡ᴥ♡ʔ",
    "ʕ≧ᴥ≦ʔ",
    "ʕ•ᴥ•ʔﾉ♡",
    "ʕノ•ᴥ•ʔノ︵┻┻",
    "ʕᵔᴥᵔʔ",
  ];
  const [kaomojiIndex, setKaomojiIndex] = useState(0);

  function newKaomojiIndex(): number {
    let index = kaomojiIndex;
    while (index === kaomojiIndex) {
      index = Math.floor(Math.random() * kaomoji.length);
    }
    return index;
  }

  return (
    <div
      className={"kuma" + (props.className ? ` ${props.className}` : "")}
      onMouseEnter={() => {
        setKaomojiIndex(newKaomojiIndex());
      }}
    >
      {kaomoji[kaomojiIndex]}
    </div>
  );
}

export default KUMA;
