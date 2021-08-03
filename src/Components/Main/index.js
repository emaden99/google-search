import "../../App.css";
import React from "react";
import { useState, useEffect } from "react";

function Main() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    var s = search.trim();
    if (s.length === 0) {
      setResults([]);
    } else {
      fetch("/fetch")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((jsonResponse) =>
          setResults(
            Object.values(jsonResponse).filter((item) =>
              item.toLowerCase().includes(s.toLowerCase())
            )
          )
        );
    }
  }, [search]);

  const enterPressed = (e) => {
    if (e.keyCode === 13) setSearch(e.target.getAttribute("data"));
  };

  return (
    <div className="mainContainer d-flex flex-column align-items-center ">
      <img
        className="brand"
        width="290"
        alt="google"
        height="98"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
      ></img>
      <div className="searchContainer mt-4">
        <input
          className=" roundManually"
          key="inpsearch"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          value={search}
          type="text"
        />

        {results.length > 0 && (
          <div>
            {results.map((item, ind) => (
              <ul id="results-list" key={item}>
                <li
                  className="results-item mt-3"
                  onKeyUp={enterPressed}
                  onClick={(e) => setSearch(e.target.getAttribute("data"))}
                  tabIndex={1}
                  data={item}
                  value={ind + 1}
                >
                  {item}
                </li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
