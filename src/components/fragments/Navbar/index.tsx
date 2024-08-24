import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  DropdownTrigger,
  DropdownMenu,
  Dropdown,
  DropdownItem,
} from "@nextui-org/react";

import { ChevronDown } from "../../elements/Icons";
import { signIn, signOut, useSession } from "next-auth/react";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };

  const menuItems = [
    "Features",
    "Pricing",
    "Demo",
    "Sign in",
  ];

  const { data } = useSession();

  return (
    <div className="sm:pt-4">
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="sm:shadow-md sm:flex navigation sm:mx-auto sm:h-16 sm:rounded-lg sm:justify-between"
      >
        <NavbarContent className="sm:flex w-full justify-between">
          <NavbarBrand className="flex">
            <img src="./logo.svg" className="sm:w-full" />
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden flex"
          />
        </NavbarContent>

        <NavbarContent className="hidden sm:flex font-medium text-sm  lg:gap-9 sm:justify-center sm:items-center" justify="center">
          <Dropdown>
            <NavbarItem className="flex ">
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent font-medium"
                  radius="sm"
                  variant="light"
                  endContent={icons.chevron}
                >
                  Features
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-full"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps to meet user demand, automagically, based on load."
              >
                Autoscaling
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              >
                Usage Metrics
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us and others serving requests at web scale."
              >
                Production Ready
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem isActive>
            <Link className="text-sm" aria-current="page" href="#">
              Pricing
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-sm" color="foreground" href="#">
              Demo
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-sm" color="foreground" href="#">
              Blog
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex w-full">
          <NavbarItem className="sm:flex w-full justify-end">
            {data ? (
               <Link onClick={() => signOut()} className="px-6 bg-danger text-white py-2 rounded-md">
               Sign out
             </Link>
            ) : (
              <Link onClick={() => signIn()} className="px-6 bg-primary text-white py-2 rounded-md">
              Sign in
            </Link>
            )}
           
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="pt-9 font-medium px-12">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="w-full flex justify-center">
              {item === "Features" ? (
                <Dropdown>
                  <DropdownTrigger>
                    <Link
                      color="foreground"
                      className="w-full gap-1 text-sm flex justify-center"
                      href="#"
                    >
                      {item}
                      {icons.chevron}
                    </Link>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Features dropdown"
                    className="w-full"
                    itemClasses={{
                      base: "gap-4",
                    }}
                  >
                    <DropdownItem
                      key="autoscaling"
                      description="ACME scales apps to meet user demand, automagically, based on load."
                    >
                      Autoscaling
                    </DropdownItem>
                    <DropdownItem
                      key="usage_metrics"
                      description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                    >
                      Usage Metrics
                    </DropdownItem>
                    <DropdownItem
                      key="production_ready"
                      description="ACME runs on ACME, join us and others serving requests at web scale."
                    >
                      Production Ready
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : item === "Sign in" ? (
                data ? (
                  <Link  onClick={() => signOut()} className="px-6 bg-danger w-full text-white py-2 rounded-lg flex justify-center">
                    Sign out
                  </Link>
                ) : (
                  <Link onClick={() => signIn()} className="px-6 bg-primary w-full text-white py-2 rounded-lg flex justify-center">
                    Sign in
                  </Link>
                )
              ) : (
                <Link
                  color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
                  className="w-full py-2 text-sm flex justify-center"
                  href="#"
                >
                  {item}
                </Link>
              )}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
