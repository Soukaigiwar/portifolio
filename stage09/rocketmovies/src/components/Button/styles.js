import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;
    padding: 3.2rem auto;
    border-radius: .8rem;
    font-size: 1.6rem;
    line-height: 2.1rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`