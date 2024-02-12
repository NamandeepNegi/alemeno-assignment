import React from 'react'
import { useLocation } from 'react-router-dom'

const SearchedCoursesName = () => {
    const location = useLocation()
    console.log(location.state)
  return (
    <div className="App">
    <h1 style={{fontSize: '4rem'}}>Searched Courses List (course name)</h1>
    <div className="course-list">
      {location?.state.map((course, index) => (
        <div className="course-item" key={course.id}>
          <h2>{index + 1}.   {course.name}</h2>
          <p>Instructor: {course.instructor}</p>
          <p>Description: {course.description}</p>
          <p>Duration: {course.duration}</p>
          <p>Schedule: {course.schedule}</p>
          <p>Location: {course.location}</p>
          <p>Prerequisites: {course.prerequisites.join(', ')}</p>
          <ul>
            {course.syllabus.map((item, index) => (
              <li key={index}>
                <strong>Week {item.week}:</strong> {item.topic} - {item.content}
              </li>
            ))}
          </ul>
          <p>Enrollment Status: {course.enrollmentStatus}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default SearchedCoursesName