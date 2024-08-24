import {
    HomeIcon,
    DevicePhoneMobileIcon,
    Squares2X2Icon,
    Cog6ToothIcon,
    ChatBubbleLeftIcon

  } from "@heroicons/react/20/solid";
  
export const MENU_LIST = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: HomeIcon,
    },
    {
      name: "Devices",
      path: "/",
      icon: DevicePhoneMobileIcon,
    },
    {
      name: "Contacts",
      path: "/",
      icon: Squares2X2Icon,
    },
    {
      name: "Message List",
      path: "/",
      icon: ChatBubbleLeftIcon,
    },
  
    {
      name: "Settings",
      path: "/",
      icon: Cog6ToothIcon,
    },
  ];
  