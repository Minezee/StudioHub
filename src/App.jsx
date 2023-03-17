import { Routes, Route, useLocation, Outlet } from "react-router-dom"
import AuthRoutes from "./routes/AuthRoutes";
import { 
  HomePage, 
  Login, 
  Signup,
  StudioList, 
  RentList, 
  EventList, 
  StudioInformation, 
  RentInformation,
  Payment,
  History,
  Profile,
  TopupMenu,
  PaymentMethod,
  TopupConfirmation,
  TopupPayment,
  PaymentSuccess,
  EventInformation,
} from "./pages"
import { useEffect } from 'react';
import PaymentRouter from "./routes/PaymentRouter";

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
            <Route element={<AuthRoutes />}>
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Route>
            <Route path='/' element={<HomePage />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/topup-menu' element={<TopupMenu />} />
            <Route path='/payment-method' element={<PaymentMethod />} />
            <Route path='/topup-confirmation' element={<TopupConfirmation />} />
            <Route path='/topup-payment' element={<TopupPayment />} />
            <Route path='/payment-success' element={<PaymentSuccess />} />
            <Route path='/studio' element={<StudioList />} />
            <Route path='/rent' element={<RentList />} />
            <Route path='/event' element={<EventList />} />
            <Route path="/history" element={<History />} />
            <Route path='/studio/detail/:name' element={<StudioInformation />} />
            <Route path='/rent/detail/:name' element={<RentInformation />} />
            <Route path='/Event/detail/:name' element={<EventInformation />} />
            <Route element={<PaymentRouter />}>
              <Route path="/:name/payment" element={<Payment />} />
            </Route>
          </Route>
        </Routes>
      </div>
  )
}

export default App
