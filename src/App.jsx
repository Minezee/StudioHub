import { Routes, Route } from "react-router-dom"
import { HomePage, Login, Signup, Information, ListPage } from "./pages"

const App = () => {
  return (
    <div className='max-w-[120rem] mx-auto'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/Information' element={<Information />} />
        <Route path='/List' element={<ListPage />} />
      </Routes>
    </div>
  )
}

export default App
