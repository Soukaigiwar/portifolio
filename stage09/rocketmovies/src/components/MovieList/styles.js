import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;
    height: 62rem;
    overflow-y: auto;
    
    &::-webkit-scrollbar {
        width: .8rem;
        height: .1rem;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb
    {
        border-radius: .8rem;
        background-color: ${({ theme }) => theme.COLORS.PINK};
    }
`