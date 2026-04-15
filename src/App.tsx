
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layouts/Header'
import Home from './layouts/Home'
import ProductList from './products/ProductList'
import ProductInfo from './products/ProductInfo'
import AddProduct from './products/AddProduct'
import SignIn from './users/SignIn'
import { useState } from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  //로그인한 ID 사용자 관리
  const [userId, setUserId] = useState<string | null>(null);

  //로그인 상태 핸들러
  const handleLogin = (username: string) => {
    setIsLoggedIn(true);
    setUserId(username); //로그인한 사용자 ID 저장
  }
  //로그아웃 상태 핸들러
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId(null)
  }

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Header 
            isLoggedIn={isLoggedIn}
            userId={userId}
            onLogout={handleLogout}
          />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/products/:id' element={<ProductInfo />} />
            <Route path='/products/add' element={<AddProduct />} />
            <Route path="/signin" element={<SignIn onLogin={handleLogin}/>} />
          </Routes>
        </BrowserRouter>


      </section>
    </>
  )
}

export default App
