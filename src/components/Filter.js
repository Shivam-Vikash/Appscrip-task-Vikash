
import { useState } from "react";

export default function FilterSection({ title, options }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleUnselect = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const clearAll = () => {
    setSelected([]);  
  };

  return (
    <div className="filter__section">
      
      <div
        className="filter__header"
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>
        <span>{open ? "▲" : "▼"}</span>
      </div>

      <div style={{ fontSize: "14px", margin: "5px 0" }}>All</div>

      {/* filter opens here*/}
      {open && (
        <div className="filter__content">
          
          <button
            className="filter__clear"
            onClick={clearAll}
          >
            Unselect all
          </button>

          {options.map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                checked={selected.includes(item)}
                onChange={() => toggleUnselect(item)}
              />
              {item}
            </label>
          ))}
        </div>
      )}

    </div>
  );
}