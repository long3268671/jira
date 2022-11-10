import React from "react";
import { project, user } from "../../types/project-list";

interface listProps {
  list: project[];
  user: user[];
}
export const List = ({ list, user }: listProps) => {
  return (
    <table>
      <thead>
        <tr>
          <td>名称</td>
          <td>负责人</td>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{user.find((use) => use.id === item.personId)?.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
