import React, {useEffect, useState} from 'react'
import coursesData from '../courses.json';
import { useNavigate } from 'react-router-dom';


// Sorry! I searched a lot but unable to get API for Courses but below comment show you how I will fetch, if i have an API of courses
// const [courses, setCourses] = useState([])

// const fetchAPI = async () => {
//     try {
//         const courses = await fetch("https://api.com")
//         if(courses.ok){
//             console.log("here are the courses data", courses.data)
//         }
//     } catch (error) {
//         console.log("error in fetching api", error)
//     }
// }

// useEffect(() => {
//     fetchAPI()
// }, [])

const CourseList = () => {
    console.log(coursesData)
    const navigate = useNavigate()
  return (
    <div className="App">
    <h1 style={{fontSize: '4rem'}}>Course List</h1>
    <div className="course-list">
      {coursesData.map((course, index) => (
        <div className="course-item" key={course.id}>
        <div style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
          <h2>{index + 1}.   {course.name}</h2>
          <button onClick={() => {navigate('/course-details', {state: course})}} className='button'>View Details</button>
          </div>
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

export default CourseList