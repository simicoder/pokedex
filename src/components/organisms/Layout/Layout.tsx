import React from 'react';
import { Navbar } from '../Navbar/Navbar';

interface LayoutProps {
  readonly children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    <main className="container mt-5">{children}</main>
  </>
);
