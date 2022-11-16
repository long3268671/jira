import React from "react";
import { useAuth } from "../context/auth-context";
import { Authenticated } from "../unauthenticated-app";
import { ProjectList } from "../sereens/project-list";

export const Home = () => {
  const { user, logout } = useAuth();
  console.log(user);
  const HomeNode = () => {
    return (
      <>
        <button onClick={logout}>登出</button>
        <ProjectList />
      </>
    );
  };
  return user ? <HomeNode /> : <Authenticated />;
};
