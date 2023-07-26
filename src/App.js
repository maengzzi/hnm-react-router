import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Productall from './page/Productall';
import Productdetail from './page/Productdetail';
import Loginpage from './page/Loginpage';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './route/PrivateRoute';
import { useNavigate } from 'react-router-dom';

//1. 전체상품페이지, 로그인, 상품상세페이지 (V)
//1-1. 네이게이션 바 만들기 (V)
//2. 전체 상품페이지에서는 전체 상품을 볼 수 있다. (V)
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다. (V)
//4. 상품 디테일을 눌렀으나, 로그인이 안돼있을 경우에는 로그인 페이지가 먼저 나온다.
//5. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
//6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
//7. 로그아웃이 되면 상품 디테일페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
//8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
//9. 상품을 검색할 수 있다.

function App() {
  const[authenticate,setAuthenticate]=useState(false); //true면 로그인, false면 로그인 X
  const navigate = useNavigate();

  useEffect(()=>{navigate("/")},[authenticate])

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<Productall/>}/>
        <Route path="/login" element={<Loginpage setAuthenticate={setAuthenticate}/>}/>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
