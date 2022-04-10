import { Component } from '../../styled/styled';
import { Header } from './PageItems/Header';
import { SideBar } from './PageItems/SideBar';
import { Prompter } from './PageItems/Prompter';
import { Footer } from './PageItems/Footer';

export const MainPage = () => {
    return (
    <Component className='mainPageDiv'>
        <Header />
        <SideBar />
        <Prompter />
        <Footer />
    </Component>
    );
};