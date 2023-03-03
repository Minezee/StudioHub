import { Routes, Route, useLocation, Outlet } from "react-router-dom"
import { HomePage, Login, Signup, Detail, ListPage, StudioList } from "./pages"
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Outlet />;
}

const App = () => {
  return (
    <div className='max-w-[120rem] mx-auto'>
      <Routes>
        <Route element={<ScrollToTop />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/studio-list' element={<StudioList />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/List' element={<ListPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
