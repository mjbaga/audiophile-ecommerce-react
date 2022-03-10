import React, { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Page from 'components/layout/Page';
import Homepage from 'pages/Homepage';
import { lazyDelayed } from 'utils/CustomFunctions';
import LoadingSpinner from 'components/layout/LoadingSpinner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from 'store/category-actions';
import { closeOverlay } from 'store/ui-slice';

const InnerWrapContent = lazyDelayed(import('pages/InnerWrapContent'));
const Category = lazyDelayed(import('pages/Category'));
const Product = lazyDelayed(import('pages/Product'));

function App() {
  const dispatch = useDispatch();
  const menuIsActive = useSelector((state) => state.ui.mobileMenuIsActive);
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);

  useEffect(()=> {
    dispatch(fetchCategories());
  }, [dispatch]);

  const closeModalHandler = () => {
    dispatch(closeOverlay());
  }

  menuIsActive || cartIsVisible ? document.body.classList.add('fixed') : document.body.classList.remove('fixed');

  return (
    <div className="App">
      {(menuIsActive || cartIsVisible) && <div onClick={closeModalHandler} className="overlay fixed top-[90px] left-0 right-0 bottom-0 bg-black/50 w-full h-screen z-[100]"></div>}
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
            <Route path="categories" element={<InnerWrapContent />}>
              <Route path=":catSlug" element={<Category />} />
            </Route>
            <Route path="products" element={<InnerWrapContent />}>
              <Route path=":productSlug" element={<Product />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
