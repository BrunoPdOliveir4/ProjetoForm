import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ErrorPage,
  HomePage,
  LobbyPage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  UsersPage,
} from '../../pages';
import DogPage from '../../pages/Dog.page';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/lobby" element={<LobbyPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/dog" element={<DogPage />} />
      <Route path="/profile/:userId" element={<ProfilePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
