import { Home, Login } from "./containers";


export default [
  {
    key:"home",
    path: "/",
    exact: true,
    component: Home,
  },
  {
    key:"login",
    path: "/login",
    exact: true,
    component: Login,
  }
];
