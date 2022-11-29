import React from 'react';



const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
      <h1>Employee Management Software</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={() => setIsAdding(true)}>Add Employee</button>
 
      </div>
    </header>
  );
};

export default Header;
