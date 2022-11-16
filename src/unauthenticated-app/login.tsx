import React, { FormEvent } from "react";
// import { login, register } from "../../auth-provider";
import { useAuth } from "../context/auth-context";

export const ProjectLogin = () => {
  const { login, user } = useAuth();
  const submitFn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };
  return (
    <form onSubmit={submitFn}>
      <div>
        <div>{user ? "用户名：" + user.name : ""}</div>
        <label htmlFor={"userName"}>账号</label>
        <input type={"text"} id={"userName"} />
      </div>
      <div>
        <label htmlFor={"password"}>密码</label>
        <input type={"password"} id={"password"} />
      </div>
      <button type={"submit"}>登录</button>
    </form>
  );
};
