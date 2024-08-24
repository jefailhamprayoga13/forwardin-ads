import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { MENU_LIST } from "./constant";
import { Bars3BottomLeftIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon, BellIcon, Cog6ToothIcon } from "@heroicons/react/20/solid";
import { signOut, useSession } from "next-auth/react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";

export default function Layout({ children }: any) {
    const router = useRouter();
    const pathName = usePathname();
    const [activePath, setActivePath] = useState(pathName);
    const [activeMenu, setActiveMenu] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isLeader, setIsLeader] = useState(null);

    const { data }: any = useSession();

    const sidebarRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const activedMenu = MENU_LIST.find((menu) => menu.path === activePath);
        if (activedMenu) {
            setActiveMenu(activedMenu.name);
        } else {
            setActiveMenu("");
        }
    }, [activePath]);

    const handleChangePage = (path: any) => {
        router.push(path);
        setIsOpen(false); // Tutup sidebar setelah navigasi
    };

    const handleClickOutside = (event: any) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsOpen(false); // Tutup sidebar jika klik di luar sidebar
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="w-full h-full relative flex-1 flex-row bg-white">
            {/* Toggle Button for Mobile */}
            <button
                data-drawer-target="beresin-sidebar"
                data-drawer-toggle="beresin-sidebar"
                aria-controls="beresin-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="sr-only">Open sidebar</span>
                <Bars3BottomLeftIcon className="w-8 h-8" />
            </button>

            {/* Sidebar */}
            <aside
                ref={sidebarRef}
                id="beresin-sidebar"
                className={`fixed top-0 left-0 z-40 w-60 h-full transition-transform ${isOpen ? '' : '-translate-x-full'} sm:translate-x-0 shadow-xl bg-white`}
                aria-label="Sidebar"
            >
                <div className="flex items-center justify-center py-10">
                    <img src="./logo-sidebar.svg" alt="" />
                </div>
                <div className="h-full px-6 py-4 overflow-y-auto">
                    <ul>
                        {MENU_LIST.map((menu, index) => {
                            if (isLeader !== 1) {
                                if (menu.name !== "Profile" && menu.name !== "Daftar Kategori" && menu.name !== "Daftar User") {
                                    return (
                                        <li
                                            key={index}
                                            className={
                                                activePath === menu.path
                                                    ? "flex flex-row items-center px-5 py-4 rounded-md active mb-4"
                                                    : "flex flex-row items-center px-5 py-4 rounded-md mb-4"
                                            }
                                            onClick={() => handleChangePage(menu.path)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            {menu.icon && <menu.icon className="w-5 mr-2" />}
                                            {menu.name}
                                        </li>
                                    );
                                }
                            } else if (menu.name !== "Profile") {
                                return (
                                    <li
                                        key={index}
                                        className={
                                            activePath === menu.path
                                                ? "flex flex-row items-center px-3 py-1 rounded-md active mb-4"
                                                : "flex flex-row items-center px-3 py-1 rounded-md mb-4"
                                        }
                                        onClick={() => handleChangePage(menu.path)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        {menu.icon && <menu.icon className="w-5 mr-2" />}
                                        {menu.name}
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </div>
            </aside>

            {/* Main Content */}
            <div className="p-1 sm:ml-[242px] h-screen">
                <div className="sm:px-6 px-3 pt-4 pb-8 bg-slate-100 mx-1 sm:mt-2 sm:mr-4 rounded-xl">
                    <header className="flex flex-row items-center justify-end">
                        <div className="flex flex-row items-center gap-2">
                            <div className="hidden sm:flex items-center rounded-xl shadow-md">
                            <Dropdown>
                                    <DropdownTrigger>
                                        <Button
                                            variant="bordered"
                                        >
                                            <BellIcon className="w-8 p-1" />
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Static Actions">
                                        <DropdownItem key="notif" className="">
                                            Notifikasi terbaru
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                
                            </div>
                            <div className="hidden sm:flex items-center rounded-xl shadow-md">
                            <Dropdown>
                                    <DropdownTrigger>
                                        <Button
                                            variant="bordered"
                                        >
                                            <div className="w-3/4 text-center">
                                    <h1 className="font-medium text-lg">{data && data.user.username}</h1>
                                </div>

                                <div className="w-1/4 flex justify-end">
                                    <UserCircleIcon className="w-24 text-primary" />
                                </div>
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Static Actions">
                                    <DropdownItem key="logout" className="text-danger" onClick={() => signOut()} color="danger">
                                            Logout
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                

                            </div>
                            <div className="flex items-center rounded-xl shadow-md">
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button
                                            variant="bordered"
                                        >
                                            <Cog6ToothIcon className="w-8 p-1" />
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Static Actions">
                                        <DropdownItem key="logout" className="text-danger" onClick={() => signOut()} color="danger">
                                            Logout
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>

                        </div>
                    </header>
                    <main className="mt-8">{children}</main>
                </div>
            </div>
        </div>
    );
}
