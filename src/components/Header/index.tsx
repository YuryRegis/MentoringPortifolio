/* eslint-disable react/require-default-props */
import { ReactNode } from 'react';
import NavLink from './NavLink';
import * as styled from './styles';

interface HeaderProps {
  children?: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Header({ children }: HeaderProps) {
  return (
    <styled.Container>
      <ul>
        <NavLink title="Home" path="/" />
      </ul>
    </styled.Container>
  );
}

export default Header;
