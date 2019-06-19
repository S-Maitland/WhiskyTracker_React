import React from 'react';

const NavBar = (props) => {
  return(
    <header>
      <img src="/images/whiskyLogo.jpg" alt="whiskyLogo"/>

      <ul>
        <li className="navLink">
          <a href="/whiskys/">Whiskys</a>
        </li>
        <li className="navLink">
          <a href="/distilleries/">Distilleries</a>
        </li>
      </ul>
    </header>

  )
}

export default NavBar;
