import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { cn } from "@/lib/utils";

export default function Layout({ children, className }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className={cn("flex flex-col w-full", className)}>
        {/*<SidebarTrigger />*/}
        {children}
      </main>
    </SidebarProvider>
  );
}
