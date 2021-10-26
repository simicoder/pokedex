import React from 'react';

export const ToggleButton = () => (
  <button
    className="navbar-toggler my-2"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarCollapse"
    aria-controls="navbarCollapse"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
);
