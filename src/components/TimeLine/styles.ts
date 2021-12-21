import styled from 'styled-components'


export const Container = styled.section`
    width: 100%;
    
    > section {
        width: 100%;
        margin-top: 7rem;
        display: flex;
        gap: 1.5rem;

        padding-bottom: 8rem;
        border-bottom: 3px solid ${({theme}) => theme.primary};
    }

    @media (max-width: 1000px) {
        gap: 1rem;
    }

    @media (max-width: 700px) {
        flex-direction: column;
        margin-top: 5rem;
        gap: 2rem;
    }
`

export const ItemContainer = styled.div`
    > div {
        background: ${({theme}) => theme.gradient};
        padding: 2.5rem 1rem 1rem 1rem;
        width: 15rem;
        display: flex;
        font-family: 'JetBrains Mono', monospace;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        transition: .5s;

        h1 {
            color: ${({theme}) => theme.primary};
            font-size: 2rem;
            margin-bottom: 1.5rem;
        }
        
        li {
            color: ${({theme}) => theme.secondary};
            font-size: 1rem;
            font-weight: 300;
            margin-bottom: .5rem;
        }
    }

    &:hover > div {
        filter: brightness(1.3);
        transform: translateY(-20px);
    }

    &:nth-child(even) > div {
        margin-top: 4rem;
    }
   
    @media (max-width: 1000px) {
       > div {
           width: 13rem;
           padding-top: 1.5rem;
           //heigh: 15rem;
           h1 {
                font-size: 1.2rem;
                margin-bottom: 1rem;
            }

            li {
                font-size: .9rem;
            }
        }
    }

    @media (max-width: 700px) {
        &:nth-child(even) {
            > div {
                margin-top: 0;
            }
        }

       > div {
           width: 10rem;
           height: auto;
           padding: 2rem;
        
           h1 {
                font-size: 1rem;
            }

            li {
                font-size: .7rem;
            }
       }
    }
`