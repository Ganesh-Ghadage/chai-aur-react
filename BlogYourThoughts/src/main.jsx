import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {AddPost, AllPosts, EditPost, Home, Login, Post, Signup} from './pages'
import { AuthLayout } from './components/index.js'

// const router = createBrowserRouter(createRoutesFromElements(
//   <Route path='/' element={<App />}>
//     <Route path='/' element={<Home />} />
//     <Route path='/login' element={<Login />} />
//     <Route path='/signup' element={<Signup />} />
//     <Route path='/all-posts' element={<AllPosts />}/>
//     <Route path='/edit-post/:slug' element={<EditPost />} />
//     <Route path='/add-post' element={<AddPost />} />
//     <Route path='/post/:slug' element={<Post />} />
//   </Route> 
// ))

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
          {
              path: "/",
              element: <Home />,
          },
          {
              path: "/login",
              element: (
                  <AuthLayout authentication={false}>
                      <Login />
                  </AuthLayout>
              ),
          },
          {
              path: "/signup",
              element: (
                  <AuthLayout authentication={false}>
                      <Signup />
                  </AuthLayout>
              ),
          },
          {
              path: "/all-posts",
              element: (
                  <AuthLayout authentication>
                      {" "}
                      <AllPosts />
                  </AuthLayout>
              ),
          },
          {
              path: "/add-post",
              element: (
                  <AuthLayout authentication>
                      {" "}
                      <AddPost />
                  </AuthLayout>
              ),
          },
          {
              path: "/edit-post/:slug",
              element: (
                  <AuthLayout authentication>
                      {" "}
                      <EditPost />
                  </AuthLayout>
              ),
          },
          {
              path: "/post/:slug",
              element: <Post />,
          },
      ],
  },
  ])
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
    </React.StrictMode>,
  )