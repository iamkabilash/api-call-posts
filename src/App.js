import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(response => setPosts(response))
  }, []);

  return (
    <div>
      <h2>Posts from JSONplaceholder</h2>
      <div>
        {
          (posts) ?
          (<ul className='ul-flex'>
            {posts.map((post) => {
              return (<div>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>)
            })
            }
          </ul>) : ( <h3>Loading...</h3> )
        }
      </div>
    </div>
  );
}

export default App;
