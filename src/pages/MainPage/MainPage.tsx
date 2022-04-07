import { MainPageDiv } from '../../styled/styled';
import { Header } from './PageItems/Header';
import { SideBar } from './PageItems/SideBar';
import { Footer } from './PageItems/Footer';

export const MainPage = () => {
    return (
    <MainPageDiv>
        <Header />
        <SideBar />
        <Footer />
    </MainPageDiv>
    );
};