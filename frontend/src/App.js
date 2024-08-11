import Login from './components/Signup_Login/Login.js';
import Signup from './components/Signup_Login/Signup.js';
import { useAuth } from './components/context/AuthProvider.js';
import Left from './components/home/LeftPart/Left.js'
import Right from './components/home/RightPart/Right.js'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';


function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            authUser ? (
              <div className='flex h-screen'>
                <Left />
                <Right />
              </div>
            ) : (
              <Navigate to={'/login'} />
            )
          } />
          <Route path="/login" element={authUser ? <Navigate to={'/'} /> : <Login />} />
          <Route path="/signup" element={authUser ? <Navigate to={'/'} /> : <Signup />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
