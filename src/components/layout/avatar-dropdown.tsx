import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
interface AvatarDropdownProps {}

export function AvatarDropdown({}:AvatarDropdownProps){
    return <DropdownMenu>
    <DropdownMenuTrigger className="focus:outline-none">
        <Avatar>
            <AvatarFallback>LC</AvatarFallback>
        </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
        <DropdownMenuItem>Sair</DropdownMenuItem>
    </DropdownMenuContent>
</DropdownMenu>
}