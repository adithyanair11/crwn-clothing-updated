import React from 'react';
import './homepage.styles.css';
import { DirectoryMenu } from '../components/directory-menu/directory-menu.component';

export const HomePage = () => {
    return(
        <div className='home-page'>
            <DirectoryMenu />
        </div>
    );
}