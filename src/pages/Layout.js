import { Outlet } from "react-router-dom";
import MyNavbar from '../components/MyNavbar';

function Layout() {
  return (
    <>
      <MyNavbar></MyNavbar>
      <div style={{ marginTop: 20, marginLeft: 60 }}>
        <Outlet></Outlet>
      </div>
      
    </>
  )
}

export default Layout