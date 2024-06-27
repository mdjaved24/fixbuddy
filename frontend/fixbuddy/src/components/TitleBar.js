import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function TitleBar(props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
      if (searchQuery) {
          const fetchSuggestions = async () => {
              try {
                const response = await axios.get(`/api/services/suggestions?query=${searchQuery}`);
                setSuggestions(response.data);
              } catch (error) {
                  console.error('Error fetching suggestions:', error);
              }
          };

          fetchSuggestions();
      } else {
          setSuggestions([]);
      }
  }, [searchQuery]);

  const handleSelect = (service) => {
      setSearchQuery(service);
      setSuggestions([]);
      navigate(`/workers-list/${service}`);
  };

  return (
    <div>
      <section style={props.TitleBg}  className="hero bg-gray-100 h-72 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-sans font-extrabold text-white sm:text-4xl">
            {props.title}
          </h1>
          <div className="mt-6 sm:max-w-lg w-8/12 mx-auto sm:flex sm:justify-center">
            <div className="mt-3 sm:mt-0 w-10/12 sm:ml-3 sm:flex-shrink-0">
              <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="border-gray-300 font-sans text-3xl block w-full h-10 pl-5 pr-12 sm:text-sm border-2 rounded-lg"
                placeholder="Search for a service"/>
            </div>
            <button className="mt-3 h-10 sm:mt-0 sm:ml-3 w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#0D7A5F] hover:bg-[#205043]">
              Search
            </button>
          </div>
          {suggestions.length > 0 && (
                <ul className="absolute bg-white mt-1 sm:max-w-lg ml-96 w-8/12 m-auto border border-gray-300 rounded-md z-10">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                            onClick={() => handleSelect(suggestion)}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )} 
        </div>
      </section>
    </div>
  )
}
