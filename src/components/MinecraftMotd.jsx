import React from "react";

const colorMap = {
  0: "#000000",
  1: "#0000AA",
  2: "#00AA00",
  3: "#00AAA",
  4: "#AA0000",
  5: "#AA00AA",
  6: "#FFAA00",
  7: "#AAAAAA",
  8: "#555555",
  9: "#5555FF",
  a: "#55FF55",
  b: "#55FFFF",
  c: "#FF5555",
  d: "#FF55FF",
  e: "#FFFF55",
  f: "#FFFFFF",
};

const styleCodes = {
  l: "bold",
  n: "underline",
  o: "italic",
  m: "line-through",
  r: "reset",
};

function parseMinecraftMotd(motd) {
  let elements = [];
  let style = {
    color: "#FFFFFF",
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "none",
  };

  const resetStyle = () => {
    style = {
      color: "#FFFFFF",
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
    };
  };

  const parts = motd.split(/(§.)/g);

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part.startsWith("§")) {
      const code = part[1];
      if (colorMap[code]) {
        style = { ...style, color: colorMap[code] };
      } else if (styleCodes[code]) {
        if (code === "r") resetStyle();
        if (code === "l") style.fontWeight = "bold";
        if (code === "o") style.fontStyle = "italic";
        if (code === "n") style.textDecoration = "underline";
        if (code === "m") style.textDecoration = "line-through";
      }
    } else {
      elements.push(
        <span style={{ ...style }} key={i}>
          {part}
        </span>
      );
    }
  }

  return elements;
}

export default function MinecraftMotd({ motd }) {
  return <div className="motd-desc">{parseMinecraftMotd(motd)}</div>;
}
