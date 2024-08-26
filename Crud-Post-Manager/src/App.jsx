import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const [posts, setPosts] = useState([]);

  useEffect( () => {
  console.log("Hello");
  }, [])

  return (
    <>
   <nav className='navbar navbar-expand-lg navbar-light bg-success px-5'>
    <a href="#" className='navbar-brand'>
      <h2 className='text-white'>CRUD POST MANAGER</h2>
    </a>
   </nav>


   <div className="container my-4">

    <div className='mb-5'>
      <input type="text"
      className='form-control mb-2'
      placeholder='Title'/>

      <input type="text"
      className='form-control mb-2'
      placeholder='Content'/>

      <button className='btn btn-success'>
      Add Post
    </button>

    </div>
    <ul className='list-group mb-4'>
      <li className='list-group-item'>
        <h2>This is a post</h2>
        <p>This is a post content</p>
      

<div className='d-flex gap-3'>
  <button className='btn btn-warning'>Update</button>
  <button className='btn btn-danger'>Delete</button>
</div>
</li>
    </ul>
    </div>
    </>
  )
}

export default App