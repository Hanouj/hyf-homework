import React from "react";
import {UserContext,} from "./LocalContext"
import {useEffect, useCallback, useContext} from "react";
import {RenderUser} from "./RenderUser"


export const SearchUser = () =>{
    const {
        query,
        setQuery,
        setIsLoading,
        setError,
        setUsers
    }=useContext(UserContext)

const fetchUsers = useCallback(() => {
    if (!query) return;
    const API_URL = `https://api.github.com/search/users?q=${query}`;
    console.log(query);
    setIsLoading(true);
    setError(undefined);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.items) {
          setUsers(data.items);
        } else {
          setError("");
        }
        setIsLoading(false)
      }).catch((error)=>setError(error))
  }, [query]);
  useEffect(() => {
    fetchUsers();
  }, [query]);
return (
    <>
    <input
    placeholder="Search for user"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  ></input>
  <RenderUser />
  </>
)
}
