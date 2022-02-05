import { LayoutWrapper } from './Layout.styles';

const Layout = (props: any) => {
  return (
    <>
      <LayoutWrapper>{props.children}</LayoutWrapper>
    </>
  );
};

export default Layout;
