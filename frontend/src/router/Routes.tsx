import React from 'react';
import loadable from '@loadable/component';
import { Navigate, Route, Routes } from 'react-router-dom';

import PageLoader from '../components/PageLoader';

import { publicUrls } from '../config';

const { dashboard } = publicUrls;

const DashboardPage = loadable(() => import('../containers/Dashboard'), { fallback: <PageLoader /> });

function Router() {
  return (
    <Routes>
      <Route path={dashboard} element={<DashboardPage />} />

      <Route path="*" element={<Navigate to={dashboard} replace />} />
    </Routes>
  );
}

export default Router;
