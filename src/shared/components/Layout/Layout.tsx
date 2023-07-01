import { LayoutContainer } from "./Layout.styles";

export interface LayoutProps {
  children: JSX.Element;
}
const Layout = ({ children }: LayoutProps) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
