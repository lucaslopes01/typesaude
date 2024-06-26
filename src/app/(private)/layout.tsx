import { AvatarDropdown } from "@/components/layout/avatar-dropdown";
import { Sidebar } from "@/components/layout/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DropdownMenuSubContent } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { ReactNode } from "react";

export default function Layout({children}:{children:ReactNode}){
    return <div className="flex flex-col">
        <div className="h16 w-full border-b flex items-center justify-between px-10 bg-white">
            <div className="w-10">
                <Image src="/images/logo.png" width={500} height={500} alt="Logo"/>
            </div>
                <AvatarDropdown/>
        </div>
        <div className="flex flex-row h-screen pt-16 items-start">
            <Sidebar/>
            <main className="w-full max-w-[calc(100vw-200px)]">{children}</main>
        </div>
        </div>
}
