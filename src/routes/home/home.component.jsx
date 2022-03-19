import React from 'react';
import { Outlet } from 'react-router-dom';
import { DirectoryMenu } from '../../components/directory-menu/directory-menu.component';

export const Home = () => {
    return(
        <div>
            <Outlet />
            <DirectoryMenu />
        </div>
    );
}