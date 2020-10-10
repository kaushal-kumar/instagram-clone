import React from 'react';
import '../styles/App.css';
import Header from './Header.js';
import Post from './Post.js';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <Header />
      <Post />
    </div>
  );
}

export default App;
