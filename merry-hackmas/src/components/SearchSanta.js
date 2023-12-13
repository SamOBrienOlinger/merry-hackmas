import React from 'react';
import '../../src/assets/styles.css';

const SearchSanta = () => {
  return (
    <div>
      <div className="search-container">
        <h2>Search for Santa</h2>
      </div>

      <div className="nondirectional-cycle">
        <div className="circle">
          <a href="https://www.factretriever.com/santa-claus-facts" target="_blank" rel="noopener noreferrer">
                Santa 1
          </a>
        </div>
        <div className="circle"> Santa 2 </div>
        <div className="circle"> Santa 3 </div>
        <div className="circle"> Santa 4 </div>
        <div className="circle"> Santa 5 </div>
      </div>
    </div>
  );
};

export default SearchSanta;
