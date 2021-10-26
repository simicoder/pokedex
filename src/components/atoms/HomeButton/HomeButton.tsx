import React from 'react';
import { Link } from 'react-router-dom';

export const HomeButton = () => (
  <Link className="navbar-brand text-black " to="/">
    <img src="/images/pokedex.png" width="150" alt="pokedex" />
  </Link>
);
