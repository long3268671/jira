import React from "react";
import { user } from "../../types/project-list";
interface searchPanelProps {
  user: user[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: searchPanelProps["param"]) => void;
}
export const SearchPanel = ({ user, param, setParam }: searchPanelProps) => {
  return (
    <form>
      <input
        value={param.name}
        onChange={(evt) => setParam({ ...param, name: evt.target.value })}
      />
      <select
        value={param.personId}
        onChange={(evt) => {
          setParam({ ...param, name: evt.target.value });
        }}
      >
        <option value={""}>负责人</option>
        {user.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </form>
  );
};
