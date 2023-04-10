import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Router';

function App() {
 
  return (
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
