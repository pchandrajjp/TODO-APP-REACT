import { useState } from 'react';
import './styles.css';
import Menu from '../menuApi';
import MenuCard from './MenuCard';

export const Resturent = () => {
  const [menuData, _setMenuData] = useState(Menu);
  const [searchTerm, setSearchTerm] = useState('');

  const filterItem = (category) => {
    if (category === 'all') {
      _setMenuData(Menu);
    } else {
      const updatedList = Menu.filter(
        (curElem) => curElem.category.toLowerCase() === category
      );
      _setMenuData(updatedList);
    }
    setSearchTerm(''); // Clear search when filtering by category
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim() === '') {
      _setMenuData(Menu);
    } else {
      const filtered = Menu.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.category.toLowerCase().includes(value.toLowerCase()) ||
        item.description.toLowerCase().includes(value.toLowerCase())
      );
      _setMenuData(filtered);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
            <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </div>
          
          <div className="btn-group">
            <button className="btn-group__item" onClick={() => filterItem('all')}>
              All
            </button>
            <button
              className="btn-group__item"
              onClick={() => filterItem('breakfast')}
            >
              Breakfast
            </button>
            <button
              className="btn-group__item"
              onClick={() => filterItem('lunch')}
            >
              Lunch
            </button>
            <button
              className="btn-group__item"
              onClick={() => filterItem('evening')}
            >
              Evening
            </button>
            <button
              className="btn-group__item"
              onClick={() => filterItem('dinner')}
            >
              Dinner
            </button>
          </div>
        </div>
      </nav>

      <MenuCard menuData={menuData} />
    </>
  );
};


