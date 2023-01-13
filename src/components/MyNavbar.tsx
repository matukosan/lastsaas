import React from "react";
import { Button, Navbar, Table, Text, Grid } from "@nextui-org/react";
import Link from "next/link";
import { Routes } from "../utils/routes.enum";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";

const MyNavbar = () => {
  const router = useRouter();
  const { data: sessionData } = useSession();

  return (
    <>
      <Navbar isBordered variant='sticky'>
        <Navbar.Brand>
          <Text b color="inherit">
            AnySaaS
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Link href="/dashboard">
            <span className={`${
              router.pathname === Routes.DASHBOARD ? 'active' : ""
            }`}
            >
              Dashboard
            </span>
          </Link>
          <Link href="/tasks">
            <span className={`${
              router.pathname === Routes.TASKS ? 'active' : ""
            }`}
            >
              Tasks
            </span>
          </Link>
        </Navbar.Content>
        <Navbar.Content>
          {sessionData ? (
            <>
              {/*logged in {JSON.stringify(sessionData)}*/}
              <Button light onClick={() => void signOut()}>Sign out</Button>
            </>
          ) : (
            <>
              <Button light onClick={() => void signIn()}>Sign in</Button>
            </>
          )}
        </Navbar.Content>
      </Navbar>
    </>
  );
};

export default MyNavbar;
