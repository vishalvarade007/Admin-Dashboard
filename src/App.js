
import { Outlet } from 'react-router-dom';
import './App.css';
import { DashboardView } from './Components/DashboardView';
import { Sidebar } from './Components/Sidebar';

function App() {
  return (
    <div className="flex">
       <div className='basis-[12%] h-[100vh]'>
        <Sidebar/>
       </div>
       <div className='basis-[88%] border-h-[100vh]'>
         <DashboardView/>
         <div>
          <Outlet></Outlet>
       </div>
       </div>
       
    </div>
  );
}

export default App;
