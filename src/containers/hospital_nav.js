import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
    {
        _tag: 'CSidebarNavItem'
    },
    {
        _tag: 'CSidebarNavDropdown',
        name: 'Hospital Dashboard',
        route: '/hospital-dashboard',
        icon: 'cil-puzzle',
        _children: [
            {
                _tag: 'CSidebarNavItem',
                name: 'Dashboard',
                to: '/hospital-dashboard',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'View All hospitals',
                to: '/all-hospitals',
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
