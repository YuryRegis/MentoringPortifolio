import {lighten} from 'polished'
import styled from 'styled-components'


interface NavLinkProps {
    isActive: boolean;    
}

export const Container = styled.header`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${({theme}) => theme.backgroundLight};

    ul {
        gap: 2rem;
        display: flex;
        align-items: center;
    }
`

export const NavLinkContainer = styled.li<NavLinkProps>`
    a {
        text-transform: uppercase;
        color: ${({theme, isActive}) => isActive ? theme.primary : theme.textHighlight};
        transition: .5s;

        &:hover {
            color: ${({theme, isActive}) => isActive ? lighten(0.2, theme.primary) : lighten(0.2, theme.textHighlight)}
        }
    }
`