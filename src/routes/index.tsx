import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IMenuItems } from '../interfaces';

const Home = React.lazy(() => import('../pages/Home'));

export default function RouteProvider() {
  const menuItems: IMenuItems[] = [
    {
      path: '/',
      id: 'home',
    },
    {
      path: '/about',
      id: 'about',
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {menuItems.map((item) => (
          <Route
            path={item.path}
            key={item.id}
            element={
              <React.Suspense fallback={`"Loading..."`}>
                <Home />
              </React.Suspense>
            }
          />
        ))}

        <Route path="*" element={<p>not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}
