import { Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home/Home";
import Profile from "./pages/user/Profile/Profile";
import MasterLayout from "./pages/user/Theme/MasterLayout";
import { ROUTERS } from "./utils/RouterURL";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <Home />,
    },
    {
        path: ROUTERS.USER.PROFILE,
        component: <Profile />,
      },
  ];
  return (
    <MasterLayout>
      <Routes>
        {userRouters.map((item, number) => (
          <Route key={number} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;
