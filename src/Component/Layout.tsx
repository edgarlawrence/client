import { ReactNode, FC, Fragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = { children: ReactNode; cartNumber?: number };

const Layout: FC<Props> = ({ children, cartNumber }) => (
  <Fragment>
    <Navbar cartNumber={cartNumber} />
    {children}
    <Footer />
  </Fragment>
);

export default Layout;
