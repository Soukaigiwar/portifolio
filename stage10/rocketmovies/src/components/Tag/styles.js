import styled from "styled-components"

export const Container = styled.span`
    display: inline-block;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        
        
        font-family: 'roboto';
        font-size: 1.6rem;
        line-height: 1.8rem;
        padding: 1.6rem;
        border: none;
        border-radius: 1rem;
    
        margin-right: 2.4rem;
    
        color: ${({ theme }) => theme.COLORS.WHITE_800};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }


    svg {
        margin-left: 16px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`