import { SidebarBreadcrumb } from "@/components/sidebar-breadcrumb";
import Tiptap from "@/components/tiptap";

export default function Page() {
  return (
    <>
      <SidebarBreadcrumb />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <Tiptap />
      </div>
    </>
  );
}
