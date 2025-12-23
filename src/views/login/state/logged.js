import { createContext, useContext, useState } from "react";

const LoggedContext = createContext();

export function LoggedProvider({ children }) {
  const [users, setUsers] = useState([
    {
      name: "Paulo",
      email: "paulo@email.com",
      password: "123456",
      birth: "1999-02-10",
      gender: "Masculino",
      weight: 80,
      height: 1.78,
      logged: false,
    },
    {
      name: "Maria",
      email: "maria@email.com",
      password: "abcdef",
      birth: "2001-10-25",
      gender: "Feminino",
      weight: 60,
      height: 1.65,
      logged: false,
    },
  ]);

  function registerUser(name, email, password, birth, gender, weight, height) {
    const exists = users.find((u) => u.email === email);
    if (exists) throw new Error("Email já cadastrado");

    const newUser = {
      name,
      email,
      password,
      birth,
      gender,
      weight,
      height,
      logged: false,
    };

    setUsers((prev) => [...prev, newUser]);
    return newUser;
  }

  function loginUser(email, password) {
    const exists = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!exists) throw new Error("Email ou senha inválidos");

    const updated = users.map((u) =>
      u.email === email ? { ...u, logged: true } : { ...u, logged: false }
    );

    setUsers(updated);
    return true;
  }

  function logoutUser() {
    setUsers((prev) => prev.map((u) => ({ ...u, logged: false })));
  }

  function getLoggedUser() {
    return users.find((u) => u.logged === true) || null;
  }

  function updateLoggedUser(updatedData) {
    setUsers((prev) =>
      prev.map((u) => (u.logged ? { ...u, ...updatedData } : u))
    );
  }

  return (
    <LoggedContext.Provider
      value={{
        users,
        registerUser,
        loginUser,
        logoutUser,
        getLoggedUser,
        updateLoggedUser,
      }}
    >
      {children}
    </LoggedContext.Provider>
  );
}

export function useLogged() {
  return useContext(LoggedContext);
}
