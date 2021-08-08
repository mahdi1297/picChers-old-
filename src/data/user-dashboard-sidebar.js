import {FiHome, FiCamera, FiEdit, FiSettings, FiLogOut} from 'react-icons/fi'


export const userDashboardSidebar = [
    {id: 1, icon: FiHome , path: '/user-dashboard/home', title: 'Home'},
    {id: 2, icon: FiCamera , path: '/user-dashboard/posts', title: 'Posts'},
    {id: 3, icon: FiEdit , path: '/user-dashboard/new-photo', title: 'Create new Post'},
    {id: 4, icon: FiSettings , path: '/user-dashboard/account-setting', title: 'Account Settings'},
    {id: 6, icon: FiLogOut , path: '/user-dashboard/logout', title: 'LogOut'}
]