import { createContext, useContext, useState } from "react";

const LoggedContext = createContext();

export function LoggedProvider({ children }) {
  const [users, setUsers] = useState([
    {
      name: "Paulo",
      email: "paulo@email.com",
      password: "123456",
      logged: false,
    },
    {
      name: "Maria",
      email: "maria@email.com",
      password: "abcdef",
      logged: false,
    },
  ]);

  function registerUser(name, email, password) {
    const exists = users.find((u) => u.email === email);

    if (exists) {
      throw new Error("Email já cadastrado");
    }

    const newUser = { name, email, password, logged: false };
    setUsers((prev) => [...prev, newUser]);

    return newUser;
  }

  function loginUser(email, password) {
    const exists = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!exists) {
      throw new Error("Email ou senha inválidos");
    }

    const updated = users.map((u) =>
      u.email === email ? { ...u, logged: true } : { ...u, logged: false }
    );

    setUsers(updated);
    return true;
  }

  function logoutUser() {
    const updated = users.map((u) => ({ ...u, logged: false }));
    setUsers(updated);
  }

  function getLoggedUser() {
    return users.find((u) => u.logged === true) || null;
  }

  return (
    <LoggedContext.Provider
      value={{
        users,
        registerUser,
        loginUser,
        logoutUser,
        getLoggedUser,
      }}
    >
      {children}
    </LoggedContext.Provider>
  );
}

export function useLogged() {
  return useContext(LoggedContext);
}
