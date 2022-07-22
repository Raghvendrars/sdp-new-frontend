import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Leaves from './pages/Leaves';
import User from './pages/User';

import DashboardApp from './pages/DashboardApp';
import { RequestModules } from './pages/RequestModule';

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'leaves', element: <Leaves /> },
        { path: 'requestModules', element: <RequestModules /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [{ path: '/', element: <Navigate to="/dashboard/app" /> }],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
