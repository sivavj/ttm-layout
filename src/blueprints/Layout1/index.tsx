import { MenuItems } from "../MenuOptions";

interface Layout1Props {
    menus: MenuItems[]
}

export const Layout1 = ()=>{
    <SideBar menus={}>
    <MainContent>
    <Header />
    <Content>
        <Outlet />
    </Content>
    <Footer/>
    </MainContent>

    


}
export default Layout1;