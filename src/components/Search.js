import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Search({ goToDate }) {
  const [query, setQuery] = useState("");
  const [resultsShow, setResultsShow] = useState(false);
  const currentUser = useSelector((state) => state.userData.currentUser);

  useEffect(() =>{
	  if(!query) {
		setResultsShow(false)
	  }
  }, [query])

  return (
    <>
      <div className="event__search">
        <div className="event__search--border">
          <div className="event__search--icon"></div>
          <input
            type="text"
            className="event__search--input"
            placeholder="Поиск событий"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setResultsShow(true);
            }}
          ></input>
        </div>
      </div>
      <div className="results">
        <div className="search__box">
          {resultsShow && (
            <div className="search__results">
              {currentUser.userEvents
                .filter((event) => {
                  return event.title
                    .toLowerCase()
                    .includes(query.toLowerCase());
                })
                .slice(0, 5)
                .map((event, index) => {
                  return (
                    <p
                      className="search__result"
                      key={index}
                      onClick={() => {
                        goToDate(event.start);
                        setResultsShow(false);
                        setQuery("");
                      }}
                    >
                      {event.title}
                    </p>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Search;
