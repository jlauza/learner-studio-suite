import React from "react";
import SignInForm from "@/components/signIn-form";
import { Suspense } from "react";

const SignInPage = () => {
  return (
    <>
      <Suspense>
        <SignInForm />
      </Suspense>
    </>
  );
};

export default SignInPage;
