import { BrowserRouter, Routes, Route } from "react-router-dom";
import Films from "./pages/Films";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import { Register } from "./pages/Register";
import './styles/style.css';
import { InfoFilm } from "./components/InfoFilm";
import { Login } from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/:id" element={<InfoFilm />}/>
            <Route path="films" element={<Films />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />}/>
            <Route path="*" element={<NoPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
