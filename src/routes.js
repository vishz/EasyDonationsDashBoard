import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

// login //
const Login = React.lazy(() => import('./views/pages/login/Login'));

// admin dashboard //
const AdminDashboard = React.lazy(() => import('./views/Admin/AdminDashboard/index'));
const AllDonations = React.lazy(() => import('./views/Admin/AdminDashboard/all-donations'));
const AllBudgets = React.lazy(() => import('./views/Admin/AdminDashboard/all-budgets'));
const PendingBudgets = React.lazy(() => import('./views/Admin/AdminDashboard/pending-budgets'));
const PendingDonations = React.lazy(() => import('./views/Admin/AdminDashboard/pending-donations'));

// hospital dashboard //
const HospitalDashboard = React.lazy(() => import('./views/Admin/HospitalDashboard/index'));
const AllHospitals = React.lazy(() => import('./views/Admin/HospitalDashboard/all-hospitals'));

// vendor dashboard //
const VendorDashboard = React.lazy(() => import('./views/Admin/VendorDashboard/index'));
const AllVendors = React.lazy(() => import('./views/Admin/VendorDashboard/all-vendors'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/login', name: 'Login', component: Login },
  

  // admin dashboard //
  { path: '/admin-dashboard', name: 'Admin Dashboard', component: AdminDashboard },
  { path: '/all-donations', name: 'All Donations', component: AllDonations },
  { path: '/all-budgets', name: 'All Budgets', component: AllBudgets },
  { path: '/pending-donations', name: 'Pending Donations', component: PendingDonations },
  { path: '/pending-budgets', name: 'Pending Budgets', component: PendingBudgets },

  // admin hospital //
  { path: '/hospital-dashboard', name: 'Hospital Dashboard', component: HospitalDashboard },
  { path: '/all-hospitals', name: 'All Hospitals', component: AllHospitals },

  // admin vendor //
  { path: '/vendor-dashboard', name: 'Vendor Dashboard', component: VendorDashboard },
  { path: '/all-vendors', name: 'All Vendors', component: AllVendors },
];

export default routes;
