import React from 'react'; 
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Updates from "./pages/Updates/Updates";
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/updates' component={Updates} />
      {/* <Route path='/resume' component={Resume} /> */}
      <Route path='/blog' component={Blog} />
    </BrowserRouter>
    </div>
  );
}

export default App;
