import React, { useState } from 'react';
import './App.css'; 
import data from './data'; 

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="input-container">
          <input
            type="text"
            placeholder="shu yerdan izla..."
            className="w-full mb-8 p-2 border border-gray-300 rounded-md"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="container">
          {filteredData.map((item, index) => (
            <div key={index} className="card">
              <h3 className="font-semibold text-lg">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
