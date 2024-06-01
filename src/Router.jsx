
import Layout from './views/Layout'

import { Home } from './views/Home'
import { ProductList } from './views/ProductList'

import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom"

import React, { useContext } from 'react'

export default function Router() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [

        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product-list",
          element: <ProductList />,

        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )


}
