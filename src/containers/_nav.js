import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
  {
    _tag: 'CSidebarNavItem'
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Admin Dashboard',
    route: '/admin-dashboard',
    icon: 'cil-puzzle',
    _children: [
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Dashboard',
      //   to: '/admin-dashboard',
      // },
      {
        _tag: 'CSidebarNavItem',
        name: 'View All Donations',
        to: '/all-donations',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'View All Pending Donations',
        to: '/pending-donations',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'View All Budget',
        to: '/all-budgets',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'View All Pending Budget',
        to: '/pending-budgets',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Log Out',
        to: '/login',
    },
    ],

  },

]
export default _nav
