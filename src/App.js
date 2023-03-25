
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ThemeProvider from './ThemeProvider';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import UsuarioProvider from './UsuarioProvider';
import Login from './Login';

function App() {
  return (
    <div>
      <ThemeProvider>
        <UsuarioProvider>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
        </UsuarioProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
