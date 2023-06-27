import './App.css';
import Routes from './Routes.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container border mt-5 p-2">
        <Routes/>
      </div>
    </BrowserRouter>
  );
}

export default App;
