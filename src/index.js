import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './index.css';
// import App from './App';
import Posts from './components/Posts';
import Post from './components/Post';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<Post />} />
    </Routes>
  </Router>
);
