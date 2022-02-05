import { Nav, NavDiv, NavDivP, NavDivPA, NavH2 } from './Navbar.styles';

const Navbar = () => {
  const checkActive = (fd: any) => {
    return true;
  };
  return (
    <Nav>
      <NavH2>SimbaProject</NavH2>
      <NavDiv>
        <NavDivP active={checkActive('/')}>
          <NavDivPA to="/">Home</NavDivPA>
        </NavDivP>
        <NavDivP active={checkActive('/transaction')}>
          <NavDivPA to="/transaction">New Transaction</NavDivPA>
        </NavDivP>
      </NavDiv>
    </Nav>
  );
};

export default Navbar;
