//Primsa
import React from 'react';
import TestCreateUser from './components/Test/TestUser/TestCreateUser';
import TestUpdateUser from './components/Test/TestUser/TestUpdateUser';
import TestCreatePost from './components/Test/TestPost/TestCreatePost';
import TestQueryPost from './components/Test/TestPost/TestQueryPost';

function App() {
  return (
    <div >
      <TestCreateUser />
      <TestUpdateUser />

      <TestCreatePost />
      <TestQueryPost />
    </div>
    
  );
}

export default App;
