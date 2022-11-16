import React, { useState } from "react";
import { ProjectLogin } from "./login";
import { ProjectRegister } from "./register";
export const Authenticated = () => {
  const [loginState, setLoginState] = useState(false);
  return (
    <div>
      {loginState ? <ProjectRegister /> : <ProjectLogin />}
      <button onClick={() => setLoginState(!loginState)}>
        {loginState ? "去登录" : "去注册"}
      </button>
    </div>
  );
};
