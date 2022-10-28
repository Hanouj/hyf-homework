import React from "react";
import "./App.css";
import Header from "./Header";
import { UserProvider } from "./LocalContext";
import { SearchUser } from "./SearchUser";

function App() {
  return (
    <div className="App">
      <Header />
      <UserProvider>
        <SearchUser />
      </UserProvider>
    </div>
  );
}

export default App;
