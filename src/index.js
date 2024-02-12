import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SearchedCoursesName from './pages/SearchedCoursesName';
import SearchedCoursesInstructor from './pages/SearchedCoursesInstructor';
import CourseDetails from './pages/CourseDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/searched-name",
    element: <SearchedCoursesName/>
  },
  {
    path: "/searched-instructor",
    element: <SearchedCoursesInstructor/>
  },
  {
    path: "/course-details",
    element: <CourseDetails/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

