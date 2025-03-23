"use client";

import { useTransition } from "react";

import { CardContent, CardFooter } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";

type Props = {
  type: "login" | "sign-up";
};

const AuthForm = ({ type }: Props) => {
  const [isPending, startTransition] = useTransition();

  const isLoginForm = type === "login";

  const handleSubmit = (formData: FormData) => {
    console.log("form submitted", formData);
  };

  return (
    <form action={handleSubmit}>
      <CardContent className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            disabled={isPending}
            required
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            disabled={isPending}
            required
          />
        </div>
      </CardContent>
      <CardFooter className="mt-4 flex flex-col gap-6">
        <Button className="w-full">
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : isLoginForm ? (
            "Login"
          ) : (
            "Sign Up"
          )}
        </Button>
        <p className="text-xs">
          {isLoginForm
            ? "Don't have an account yet? Sign up"
            : "Already have an account? Login"}{" "}
          <Link
            href={isLoginForm ? "/sign-up" : "/login"}
            className={`text-blue-500 underline ${isPending && "pointer-events-none opacity-50"}`}
          >
            here
          </Link>
          .
        </p>
      </CardFooter>
    </form>
  );
};

export default AuthForm;
