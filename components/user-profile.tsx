"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";

import { SignOut } from "./auth-components";
export default function UserProfile({ session }: any) {
  const handleAction = (key: React.Key) => {
    if (key === "logout") {
      SignOut();
    }
  };

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              src: `${session?.user?.image}`,
            }}
            description={`Email: ${session?.user?.email}`}
            name={session?.user?.name}
          />
        </DropdownTrigger>
        <DropdownMenu
          aria-label="User Actions"
          variant="flat"
          onAction={handleAction}
        >
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">{session?.user?.name}</p>
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            注销
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
