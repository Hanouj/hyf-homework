import React from "react";
import { useContext } from "react";
import {UserContext} from "./LocalContext"

export const RenderUser = () =>{
    const {
        users,
        isLoading,
        error     
    }=useContext(UserContext)

     const usersResult = users.map((user, index) => (
        <div key={index}>
          {user.login}
          <img src={user.avatar_url} alt="GitHub user avatar" />
        </div>
      ));

      return(
        <>
        {isLoading && <div>Loading....</div>}
        {!!error && (
          <div
            style={{
              color: "red",
            }}
          >
            {error}
          </div>
        )}
        {users.length === 0 && <div>No Results</div>}
        {usersResult}
        </>
      )
}
export default RenderUser
