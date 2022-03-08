import { Routes, Route } from 'react-router-dom';
import Homepage from 'pages/Homepage';
import Categories from 'pages/Categories';
import Category from 'pages/Category';
import Page from 'components/layout/Page';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Page />}>
          <Route index element={<Homepage />} />
          <Route path="categories" element={<Categories />}>
            <Route path=":catSlug" element={<Category />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
