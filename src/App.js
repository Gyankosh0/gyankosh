import './App.css';
import React from 'react';
import Form from './components/pages/Form';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './components/pages/Login';
import QuestionPaper from './components/pages/question_paper';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/"
            exact element={<Form />}>
          </Route>
          {/* <Route path="/"
            exact element={<Login/>}>
          </Route> */}
          <Route path="/question_bank"
            exact element={<QuestionPaper/>}>
          </Route>
          <Route path="/question_bank/:id"
            exact element={<QuestionPaper />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
