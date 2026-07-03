import { createContext, useEffect, useState } from "react";
import { getUsers } from "../services/user-services";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const getUsersList = async () => {
    const response = await getUsers();
    if (response.isSuccess) {
      setUsers(response.data);
    }
  };
  useEffect(() => {
    getUsersList();
  }, []);
  return (
    <UserContext.Provider value={{ users, getUsersList }}>
      {children}
    </UserContext.Provider>
  );
};
