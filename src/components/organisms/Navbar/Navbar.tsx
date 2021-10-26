import React from 'react';
import { HomeButton } from '../../atoms/HomeButton/HomeButton';
import { ToggleButton } from '../../atoms/ToggleButton/ToggleButton';
import { SearchForm } from '../../moleculs/SearchForm/SearchForm';

export const Navbar = () => (
  <nav className="navbar navbar-expand-sm navbar-light bg-white fixed-top">
    <div className="container-fluid">
      <HomeButton />

      <ToggleButton />

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <SearchForm />
      </div>
    </div>
  </nav>
);
