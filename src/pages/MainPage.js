import { MainPageDiv } from '../styled/styled';
import { Header } from './Header';
import { SideBar } from './SideBar';

export const MainPage = () => {
    return (
    <MainPageDiv>
        <Header />
        <SideBar />
    </MainPageDiv>
    );
};