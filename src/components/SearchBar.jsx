import React, { useState } from 'react';
import coursesData from '../courses.json';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [searchTermName, setSearchTermName] = useState('');
    const navigate = useNavigate()

    const handleChangeName = (event) => {
        setSearchTermName(event.target.value);
    };

    const handleSubmitName = (event) => {
        event.preventDefault();
        const filteredCourses = coursesData.filter((course) => course.name === searchTermName)
        if (filteredCourses?.length) {
            navigate('/searched-name', { state: filteredCourses })
        }
    };


    const [searchTermInstructor, setSearchTermInstructor] = useState('');

    const handleChangeInstructor = (event) => {
        setSearchTermInstructor(event.target.value);
    };

    const handleSubmitInstructor = (event) => {
        event.preventDefault();
        const filteredCourses = coursesData.filter((course) => course.instructor === searchTermInstructor)
        if (filteredCourses?.length) {
            navigate('/searched-instructor', { state: filteredCourses })
        }
    };

    return (
        <div>
        <div className="search-section">
          <h3>Search with Course Name</h3>
          <form className="search-bar" onSubmit={handleSubmitName}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTermName}
              onChange={handleChangeName}
            />
            <button type="submit">Search By Name</button>
          </form>
        </div>
        <div className="search-section">
          <h3>Search with Instructor Name</h3>
          <form className="search-bar" onSubmit={handleSubmitInstructor}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTermInstructor}
              onChange={handleChangeInstructor}
            />
            <button type="submit">Search By Instructor Name</button>
          </form>
        </div>
      </div>
      
    );
};

export default SearchBar;
