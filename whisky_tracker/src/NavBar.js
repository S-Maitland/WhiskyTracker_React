import React from 'react';
import './Logo.css';
import './NavBar.css';

const NavBar = (props) => {
  return(
    <header className="">
      <img className="whiskyLogo" src="/images/whiskyLogo.jpg" alt="whiskyLogo"/>

      <ul>
        <li className="navLink">
          <a href="/whiskys/">Whiskys</a>
        </li>
        <li className="navLink">
          <a href="/distilleries/">Distilleries</a>
        </li>

        <li>
          <a href="/whiskys/new">New Whisky</a>
        </li>

        <li>
          <a href="/distilleries/new">New Distillery</a>
        </li>
      </ul>

    </header>

  )
}

export default NavBar;
