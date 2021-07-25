import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
    {
        _tag: 'CSidebarNavItem'
    },
    {
        _tag: 'CSidebarNavDropdown',
        name: 'Vendor Dashboard',
        route: '/vendor-dashboard',
        icon: 'cil-puzzle',
        _children: [
            {
                _tag: 'CSidebarNavItem',
                name: 'Dashboard',
                to: '/vendor-dashboard',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'View All Vendors',
                to: '/all-vendors',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Log Out',
                to: '/login',
            },
        ]
    },
  
]
export default _nav
