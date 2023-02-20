import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    gap: 2.4rem;
    height: 70rem;
    overflow-y: auto;
    
    &::-webkit-scrollbar {
        width: 2.4rem;
    }
    
    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb
    {
        height: 4rem;
        border: .8rem solid;
        border-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        border-radius: 9999px;
        background-color: ${({ theme }) => theme.COLORS.PINK};
    }
`