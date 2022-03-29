
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Home from '././pages/Home';


export default function App() {
  return (
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  );
}

