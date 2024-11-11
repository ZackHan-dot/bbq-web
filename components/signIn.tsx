import { SignInButton } from "./signIn-button";
import UserProfile from "./user-profile";

import { auth } from "@/auth";

export default async function SignIn() {
  const session = await auth();

  if (!session?.user) return <SignInButton />;

  return (
    <div className="flex items-center gap-2">
      <UserProfile session={session} />
    </div>
  );
}
