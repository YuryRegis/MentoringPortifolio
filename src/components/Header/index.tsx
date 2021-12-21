import NavLink from './NavLink'
import { ReactNode } from 'react'
import * as styled from './styles'


interface HeaderProps {
    children?: ReactNode;
}

function Header({ children }: HeaderProps) {
    return (
        <styled.Container>
            <ul>
                <NavLink title='Home' path='/' />
            </ul>
        </styled.Container>
    )
}

export default Header