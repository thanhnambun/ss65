import Profile from './components/bt1/Profile'
import ListUser from './components/bt2/listUser'
import ListProduct from './components/bt3/ListProduct'
import Counter from './components/bt4/Count'
export default function App() {
  return (
    <div>
      {/* 
      reduct: là 1 thư viện 
      giúp quản lý state 
      khi reactjs truyền comnponents mất thời gian hơn phải truyền nhiều đôi khi code còn phức tạp 
      => reduct sinh ra để giải quyết những vấn đề đó 
      các bước cấu hình redux

       */}
       <Profile></Profile>
      <br />
      <ListUser></ListUser>
      <br />
      <ListProduct></ListProduct>
      <br />
      <Counter></Counter>
    </div>
  )
}
