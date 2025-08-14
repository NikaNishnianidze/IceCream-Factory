import { createContext, useContext, useState, type ReactNode } from "react";

interface IroleContext {
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>;
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  giveRole: (newRole: string) => void;
}
const roleContext = createContext<IroleContext>({
  role: "",
  setRole: () => {},
  status: "",
  setStatus: () => {},
  giveRole: () => {},
});

export default function RoleContext({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const giveRole = (newRole: string) => {
    setRole(newRole);
    localStorage.setItem("role", newRole);
  };

  return (
    <>
      <roleContext.Provider
        value={{ role, setRole, status, setStatus, giveRole }}
      >
        {children}
      </roleContext.Provider>
    </>
  );
}

export const useRoleContext = () => {
  const context = useContext(roleContext);
  return context;
};
