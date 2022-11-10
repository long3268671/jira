import React, { FormEvent } from "react";
export const ProjectLogin = () => {
  const submitFn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    const userName = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const passWord = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    console.log(userName, passWord);
  };
  return (
    <form onSubmit={submitFn}>
      <div>
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
