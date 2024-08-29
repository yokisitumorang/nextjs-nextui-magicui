"use client"
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import { Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";


export const Navbar = () => {


    return (
        <NextUINavbar maxWidth="xl" position="sticky" className=" bg-transparent w-full mt-2" isBlurred={false}>
            <div className="h-full w-full py-2 justify-center flex ">
                <div className=" border-gray-500 border-opacity-15 backdrop-blur-md rounded-md flex min-w-min items-center px-4">
                    <Avatar
                        className=" scale-90"
                        color="secondary"
                        name="Jason Hughes"
                        size="sm"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                    <div className="ml-2 flex space-x-2 gap-1">
                        <NavbarContent >
                            <ul className="hidden lg:flex gap-4 justify-start ml-2">
                                <NavbarItem key="#">
                                    <NextLink
                                        className={clsx(
                                            linkStyles({ color: "foreground" }),
                                            "data-[active=true]:text-primary data-[active=true]:font-medium",
                                        )}
                                        color="foreground"
                                        href="#"
                                    >
                                        Home
                                    </NextLink>
                                </NavbarItem>
                            </ul>
                        </NavbarContent>
                        <NavbarContent >
                            <ul className="hidden lg:flex gap-4 justify-start ml-2">
                                <NavbarItem key="#">
                                    <NextLink
                                        className={clsx(
                                            linkStyles({ color: "foreground" }),
                                            "data-[active=true]:text-primary data-[active=true]:font-medium",
                                        )}
                                        color="foreground"
                                        href="#"
                                    >
                                        Menu 1
                                    </NextLink>
                                </NavbarItem>
                            </ul>
                        </NavbarContent>
                        <NavbarContent >
                            <ul className="hidden lg:flex gap-4 justify-start ml-2">
                                <NavbarItem key="#">
                                    <NextLink
                                        className={clsx(
                                            linkStyles({ color: "foreground" }),
                                            "data-[active=true]:text-primary data-[active=true]:font-medium",
                                        )}
                                        color="foreground"
                                        href="#"
                                    >
                                        Menu 2
                                    </NextLink>
                                </NavbarItem>
                            </ul>
                        </NavbarContent>
                        <NavbarContent >
                            <ul className="hidden lg:flex gap-4 justify-start ml-2">
                                <NavbarItem key="#">
                                    <NextLink
                                        className={clsx(
                                            linkStyles({ color: "foreground" }),
                                            "data-[active=true]:text-primary data-[active=true]:font-medium",
                                        )}
                                        color="foreground"
                                        href="#"
                                    >
                                        Menu 3
                                    </NextLink>
                                </NavbarItem>
                            </ul>
                        </NavbarContent>
                        <NavbarContent >
                            <ul className="hidden lg:flex gap-4 justify-start ml-2">
                                <NavbarItem key="#">
                                    <NextLink
                                        className={clsx(
                                            linkStyles({ color: "foreground" }),
                                            "data-[active=true]:text-primary data-[active=true]:font-medium",
                                        )}
                                        color="foreground"
                                        href="#"
                                    >
                                        Menu 4
                                    </NextLink>
                                </NavbarItem>
                            </ul>
                        </NavbarContent>
                    </div>
                </div>
            </div>
        </NextUINavbar>
    );
};
