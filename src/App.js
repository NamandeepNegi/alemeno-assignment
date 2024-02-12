import CourseList from './components/CourseList';
import SearchBar from './components/SearchBar';
import SearchedCourses from './pages/SearchedCoursesName';


function App() {
  return (<div style={{display: 'flex', flexDirection: 'column'}}>
  <SearchBar/>
   <CourseList/>
   </div>
  );
}

export default App;
