import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import RecommendedVideos from './Components/RecommendedVideos';
import SearchPage from './Components/SearchPage';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
    return (
        <div className="App">
         {/* Header */}
         <Router>
             <Header/> 
             <Switch>
                 <Route path="/search/:searchTerm">
                     <div className="app__page">
                         <Sidebar/> <
SearchPage / >
                     </div> 
                 </Route>
                 <Route path="/">   
                     <div className="app__page">
                         <Sidebar/>
                         <RecommendedVideos/>
                     </div> 
                 </Route>
             </Switch>
         </Router>
      </div>
    );
}

export default App;