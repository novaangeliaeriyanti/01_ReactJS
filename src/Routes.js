import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import DashboardLayout from './layout/DashboardLayout'
import Flexbox from './views/tailwind/Flexbox'
import Landingpage from "./views/tailwind/Landingpage";
import DetailPage from './views/tailwind/DetailPage'

export default function Routes() {

  return useRoutes([
    { path: "/bootcamp/NodeJS", element: <DetailPage /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
