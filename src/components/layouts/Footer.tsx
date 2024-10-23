import { appConfig } from "@/config/app";
import { ModeToggle } from "../mode-toggle";

export function Footer() {
    return (
        <footer className="flex flex-col items-center justify-between gap-4 min-h-[3rem] md:h-20 py-2 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">Mock Messenger &copy; {new Date().getFullYear()}</p>
          
        </footer>
    )
}