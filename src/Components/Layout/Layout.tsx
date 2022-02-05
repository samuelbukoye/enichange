import Navbar from '../Navbar/Navbar';
import { LayoutWrapper } from './Layout.styles';

const Layout = (props: any) => {
  return (
    <>
      <Navbar />
      <LayoutWrapper>{props.children}</LayoutWrapper>
    </>
  );
};

export default Layout;
