import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ErrorPage,
  HomePage,
  ConsultPage,
  RegisterPage,
} from '../../pages';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/consult" element={<ConsultPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
