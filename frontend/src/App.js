//Primsa
import React from 'react';
import TestCreateUser from './components/Test/TestUserOld/TestCreateUser';

import TestUser from './components/Test/TestUser/TestUser';
import TestUpdateUser from './components/Test/TestUserOld/TestUpdateUser';
import TestPost from './components/Test/TestPost/TestPost';
import TestAppointment from './components/Test/TestAppointment/TestAppointment';

function App() {
  return (
    <div >
      {/* <TestCreateUser /> */}
      <TestUser />
      <TestUpdateUser />

      <TestPost />

      <TestAppointment />
    </div>
    
  );
}

export default App;
