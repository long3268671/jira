import React from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useEffect, useState } from "react";
import { cleanObject, useMount, useDebounce } from "../../utils";
import * as qs from "qs";
const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  let debounceParam = useDebounce(param, 2000);
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    console.log("debounceParam", debounceParam);
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`
    ).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [debounceParam]);
  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });
  return (
    <div>
      <SearchPanel user={users} param={param} setParam={setParam}></SearchPanel>
      <List list={list} user={users}></List>
    </div>
  );
};
