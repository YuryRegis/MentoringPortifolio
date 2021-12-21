import styled from 'styled-components'


export const Container = styled.section`
    width: 100%;
    display: flex;

    margin-top: 5rem;
    gap: 2rem;

    justify-content: center;
    align-items: center;

    > img {
        width: 40rem;
        flex: 1;

        --webkit-filter: drop-shadow(3px 3px 0 ${({theme})=> theme.primary})
                        drop-shadow(-1px -1px 0 ${({theme})=> theme.primary});

        filter: drop-shadow(3px 5px 0 ${({theme})=> theme.primary}) 
                drop-shadow(-5px -7px 0 ${({theme})=> theme.primary});
    }

    > div {
        flex: 4;
    }

    @media(max-width: 1450px) {
        > img {
            width: 30rem;
        }

        > div {
            flex: 1;
        }
    }

    @media(max-width: 1000px) {
        > img {
            width: 22rem;
        }
    }

    @media(max-width: 700px) {
        flex-direction: column-reverse;

        > div {
            width: 100%;
        }
    }
`

export const TexContainer = styled.section`
    margin-bottom: 2rem;
    width: 100%;

    h1 {
        font-size: 8rem;
        color: ${({theme}) => theme.primary }
    }

    h2 {
        font-size: 3rem;
        font-weight: 400; 
        color: ${({theme}) => theme.secondary }
    }

    @media(max-width: 1450px) {
        > h1 {
            font-size: 5rem;
        }

        > h2 {
            font-size: 2rem;
        }
    }

    @media(max-width: 1000px) {
        > h1 {
            font-size: 3rem;
        }

        > h2 {
            font-size: 1.5rem;
        }
    }
`

export const InfosContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const CodeItem = styled.pre`
    background: ${({theme}) => theme.gradient};
    padding: 2rem;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 300;
    color: #FFF;
    width: 24rem;
    align-self: flex-start;
    transition: 1s;

    &:hover {
        filter: brightness(1.2);
    }

    &:last-child {
        align-self: flex-end;
    }

    > div {
        margin: .2rem 0 .2rem 1rem;
    }

    span.comment {
        color: #C3C3C3;
        margin-bottom: 1rem;
        display: block;
    }

    span.purple {
        color: #C38CDE;
    }

    span.blue {
        color: #7AC7E3;
        margin-left: .3rem;
    }

    @media(max-width: 1450px) {
        width: 18rem;
        padding: 1.8rem;
        font-size: .8rem;
    }

    @media(max-width: 1000px) {
        width: 100%;
        padding: 1.8rem;
        font-size: .8rem;
    }
`