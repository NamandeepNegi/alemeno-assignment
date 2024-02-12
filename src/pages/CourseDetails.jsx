import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const CourseDetails = () => {
    const [course, setCourse] = useState()
    const location = useLocation()
    useEffect(() => {
setCourse(location?.state)
    }, [])
  return (
    <div className="course-item">
    <h1>Details</h1>
  <div className="course-details">
    <h2>{course?.name}</h2>
    <p className="info">Instructor: {course?.instructor}</p>
    <p className="info">Description: {course?.description}</p>
    <p className="info">Duration: {course?.duration}</p>
    <p className="info">Schedule: {course?.schedule}</p>
    <p className="info">Location: {course?.location}</p>
    <p className="info">Prerequisites: {course?.prerequisites.join(', ')}</p>
    <ul>
      {course?.syllabus.map((item, index) => (
        <li key={index}>
          <strong>Week {item.week}:</strong> {item.topic} - {item.content}
        </li>
      ))}
    </ul>
    <p className="info">Enrollment Status: {course?.enrollmentStatus}</p>
  </div>
</div>

  )
}

export default CourseDetails