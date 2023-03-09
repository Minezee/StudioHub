import { Routes, Route, useLocation, Outlet } from "react-router-dom"
import { 
  HomePage, 
  Login, 
  Signup,
  StudioList, 
  RentList, 
  EventList, 
  StudioInformation, 
  RentInformation
} from "./pages"
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
      <div className='max-w-[150rem] mx-auto bg-dark'>
        <Routes>
          <Route element={<ScrollToTop />}>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/studio' element={<StudioList />} />
            <Route path='/rent' element={<RentList />} />
            <Route path='/event' element={<EventList />} />
            <Route path='/studio/detail/:name' element={<StudioInformation />} />
            <Route path='/rent/detail/:name' element={<RentInformation />} />
          </Route>
        </Routes>
      </div>
  )
}

export default App
