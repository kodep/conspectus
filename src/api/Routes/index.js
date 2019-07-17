import LoginPage from '../../components/loginPage';
import MyMitting from '../../scenes/MyMitting';

export const routes = [
  {
    // isNavBar: true,
    // isExact: true,
    path: '/my-mitting',
    name: 'MyMitting',
    component: MyMitting
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  }
];
