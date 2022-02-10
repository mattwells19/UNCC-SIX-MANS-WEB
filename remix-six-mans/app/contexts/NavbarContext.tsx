import { createContext, Dispatch, FC, SetStateAction, useContext, useEffect, useState } from "react";
import { useLocation } from "remix";

interface INavbarContextValue {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const NavbarContext = createContext<INavbarContextValue | null>(null);

const NavbarProvider: FC = ({ children }) => {
  const location = useLocation();
  const [open, setOpen] = useState<boolean>(false);

  // close navbar on selection
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return <NavbarContext.Provider value={{ open, setOpen }}>{children}</NavbarContext.Provider>;
};

function useNavbar(): INavbarContextValue {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("Tried to use NavbarContext outside of its Provider.");
  }
  return context;
}

export { NavbarProvider, useNavbar };
