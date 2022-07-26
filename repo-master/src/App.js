import "./App.css";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import Login from "./Page/Dang Nhap/Login";
import Register from "./Page/Dang Ki/Register";
import TrangChu from "./Page/Trang Chu/TrangChu";
import ChiTietPhong from "./Page/ChiTietPhong/ChiTietPhong";
import SearchLo from "./Page/Search/search";
import Trips from "./Page/Trang Chu/Trips/Trips/Trips";
import SpinnerLoading from "./components/spinnerLoading/SpinnerLoading";
import Layout from "./Templates/Layout";
import { createBrowserHistory } from "history";
import AdminDashBoard from "./Page/AdminPages/AdminDashBoard/AdminDashBoard";
import AdminUsers from "./Page/AdminPages/AdminUsers/AdminUsers";
import AdminAddUsers from "./Page/AdminPages/AdminUsers/AdminAddUsers/AdminAddUsers";
import AdminEditUser from "./Page/AdminPages/AdminUsers/AdminEditUser/AdminEditUser";
import AdminUserProfile from "./Page/AdminPages/AdminUsers/AdminUserProfile/AdminUserProfile";
import AdminLoaction from "./Page/AdminPages/AdminLocations/AdminLocations";
import AdminLocationDetail from "./Page/AdminPages/AdminLocations/AdminLocationDetail/AdminLocationDetail";
import AdminAddLocation from "./Page/AdminPages/AdminLocations/AdminAddLocation/AdminAddLocation";
import AdminEditLocation from "./Page/AdminPages/AdminLocations/AdminEditLocation/AdminEditLocation";
import AdminRooms from "./Page/AdminPages/AdminRooms/AdminRooms";
import AdminRoomDetail from "./Page/AdminPages/AdminRooms/AdminRoomDetail/AdminRoomDetail";
import AdminAddRoom from "./Page/AdminPages/AdminRooms/AdminAddRoom/AdminAddRoom";
import AdminEditRoom from "./Page/AdminPages/AdminRooms/AdminEditRoom/AdminEditRoom";
import AdminValueate from "./Page/AdminPages/AdminValueate/AdminValueate";
import AdminTemplate from "./Templates/AdminTemplate/AdminTemplate";
import EditUser from "./Page/Trang Chu/Trips/editUser/EditUser";


export const history = createBrowserHistory();

// const progress=new ProgressBar({
//   size:4,
//   color:"#FE595E",
//   className:"z-50",
//   delay:100,
// });
// progress.start();
// setTimeout(() => {
//   progress.finish();
// }, 1000);

function App() {
  return (
    <>
      <SpinnerLoading />
      <Router history={history}>
        <Switch>
          <Route
            path="/"
            exact
            //  component={TrangChu}
            render={() => {
              return <Layout Component={TrangChu} />;
            }}
          />
          <Route path="/search/:locationId" component={SearchLo} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/detail/:id" component={ChiTietPhong} />
          <Route path="/profile/:id" component={Trips} />
          <Route path="/edituser/:id" component={AdminEditUser} />

          <Route
            exact
            path="/admin/dashboard"
            render={() => {
              return <AdminTemplate Component={AdminDashBoard} />;
            }}
          />

          <Route
            exact
            path="/admin/user"
            render={() => {
              return <AdminTemplate Component={AdminUsers} />;
            }}
          />
          <Route
            exact
            path="/admin/user/addnew"
            render={() => {
              return <AdminTemplate Component={AdminAddUsers} />;
            }}
          />
          <Route
            exact
            path="/admin/user/edit"
            render={() => {
              return <AdminTemplate Component={AdminEditUser} />;
            }}
          />
          <Route
            exact
            path="/admin/user/profile"
            render={() => {
              return <AdminTemplate Component={AdminUserProfile} />;
            }}
          />
          <Route
            exact
            path="/admin/location"
            render={() => {
              return <AdminTemplate Component={AdminLoaction} />;
            }}
          />
          <Route
            exact
            path="/admin/location/detail/:id"
            render={() => {
              return <AdminTemplate Component={AdminLocationDetail} />;
            }}
          />
          <Route
            exact
            path="/admin/location/addnew"
            render={() => {
              return <AdminTemplate Component={AdminAddLocation} />;
            }}
          />
          <Route
            exact
            path="/admin/location/edit"
            render={() => {
              return <AdminTemplate Component={AdminEditLocation} />;
            }}
          />
          <Route
            exact
            path="/admin/rooms/:locationId"
            render={() => {
              return <AdminTemplate Component={AdminRooms} />;
            }}
          />
          <Route
            exact
            path="/admin/rooms/detail/:id"
            render={() => {
              return <AdminTemplate Component={AdminRoomDetail} />;
            }}
          />
          <Route
            exact
            path="/admin/rooms/addnew/:locationId"
            render={() => {
              return <AdminTemplate Component={AdminAddRoom} />;
            }}
          />
          <Route
            exact
            path="/admin/rooms/edit/:locationId"
            render={() => {
              return <AdminTemplate Component={AdminEditRoom} />;
            }}
          />
          <Route
            exact
            path="/admin/reviewsByRoom/:roomId"
            render={() => {
              return <AdminTemplate Component={AdminValueate} />;
            }}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
