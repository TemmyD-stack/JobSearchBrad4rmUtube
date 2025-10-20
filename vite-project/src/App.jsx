import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,

} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage';
import AddJobPage from './pages/AddJobPage';
import JobPage, {jobLoader} from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
import Spinner from './component/Spinner.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} />
      <Route path='/add-job' element={<AddJobPage />}  />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);
const App = () => {
  return (
    <RouterProvider 
    router={router} 
    // hydrateFallbackElement={<Spinner loading={true}/>} 
    />
  )
  
}

export default App