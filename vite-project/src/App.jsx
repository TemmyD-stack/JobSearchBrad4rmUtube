import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,

} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage';
import EditJobPage from './pages/EditJobPage';
import AddJobPage from './pages/AddJobPage';
import JobPage, {jobLoader} from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  // Add Job function
  const addJob = async (newJob) => {
  const res =await fetch('/api/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newJob)
  });
  return;
}

// Delete Job function
const deleteJob = async (jobId) => {
  const res = await fetch(`/api/jobs/${jobId}`, {
    method: 'DELETE'
  });
  return;
}

// Update Job function
const updateJob = async (job) => {
  const res =await fetch(`/api/jobs/${job.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(job)
  });
  return;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader} />
      <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader} />
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />}  />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);
  return <RouterProvider router={router}/>
  
}

export default App