import "./index.css"


 import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"
  /* React Router Dom is used to build single-page applications i.e. applications 
  that have many pages or components but the page is never refreshed instead the 
  content is dynamically fetched based on the URL.This process is called Routing 
  and it is made possible with the help of React Router Dom */
  import Header from './components/header/Header';
  import Home from './pages/home/home';
  import MovieList from './components/movieList/movieList';

function App() {
  return (
    <div className="App">
      {/*We add a package for react router Dom 
         name :  */}
     <Router>
     <Header />
      <Routes>
        
       <Route index element={<h1><Home /></h1>}></Route>
       <Route path="movie/:id" element={<h1>Movie detail page</h1>}></Route>
       <Route path="movies/:type" element={<h1><MovieList/></h1>}></Route>
       <Route path="/*" element={<h1>Error page</h1>}></Route>
       </Routes>
       </Router>
    </div>
  );
}

export default App;
