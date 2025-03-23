"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "./ui/button";

const LogoutButton = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogout = () => {
    setIsLoading(true);
    console.log("logging out");

    try {
      router.push("/");
      toast.success("Logged out");
    } catch (err) {
      console.log(err);
      toast.error("Failed to log out");
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleLogout}
      disabled={isLoading}
      className="w-18"
    >
      {isLoading ? <Loader2 className="animate-spin" /> : "Logout"}
    </Button>
  );
};

export default LogoutButton;
