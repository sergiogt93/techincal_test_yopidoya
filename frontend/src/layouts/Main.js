import { CustomNavbar } from "../components/Navbar";

export const Main = ({ children }) => {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>
      <main>{children}</main>
    </>
  );
};
