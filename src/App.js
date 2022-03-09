import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Page from 'components/layout/Page';
import Homepage from 'pages/Homepage';
import { lazyDelayed } from 'utils/CustomFunctions';
import LoadingSpinner from 'components/layout/LoadingSpinner';

const Categories = lazyDelayed(import('pages/Categories'));
const Category = lazyDelayed(import('pages/Category'));
const Product = lazyDelayed(import('pages/Product'));

function App() {

  return (
    <div className="App">
      <Suspense 
        fallback={
          <div className="fixed w-full h-screen top-0 left-0 right-0 bottom-0 bg-black/25">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route exact path="/" element={<Page />}>
            <Route index element={<Homepage />} />
            <Route path="categories" element={<Categories />}>
              <Route path=":catSlug" element={<Category />} />
            </Route>
            <Route path="products/:productSlug" element={<Product />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
