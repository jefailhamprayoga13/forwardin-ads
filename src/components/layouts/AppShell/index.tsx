import { useRouter } from "next/router";
import NavigationBar from "../../fragments/Navbar";

type AppShellProps = {
    children: React.ReactNode;
};

const disableNavbar = ["/auth/login", "/auth/register", "/admin", "/admin/devices"];

const AppShell = (props : AppShellProps) => {
    const {children} = props;
    const {pathname} = useRouter()

    return (
        <>
            {(!disableNavbar.includes(pathname) && <NavigationBar/>)}
            {children}
        </>
    )}

export default AppShell;