import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ErrorPage,
  HomePage,
  LobbyPage,
  RegisterPage,
} from '../../pages';
import DogPage from '../../pages/Dog.page';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/lobby" element={<LobbyPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
