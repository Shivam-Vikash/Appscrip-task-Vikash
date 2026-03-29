"use client";

import { useState } from "react";

export default function Dropdown({ label, options }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="dropdown">
      <div
        className="dropdown__header"
        onClick={() => setOpen(!open)}
      >
        <span>{selected}</span>
        {/* <span className="arrow">⌄▾▼</span> */}
        <span>▾</span>
      </div>

      {/* dropdown menu opens here*/}
      {open && (
        <div className="dropdown__menu">
          {options.map((item, index) => (
            <div
                key={index}
                className={`dropdown__item ${
                    selected === item ? "active" : ""
                }`}
                onClick={() => {
                    setSelected(item);
                    setOpen(false);
                }}
                >
                {selected === item && <span className="tick">✔</span>}
                <span className="text">{item}</span>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}