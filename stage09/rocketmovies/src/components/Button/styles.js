import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;
    padding: 3.2rem auto;
    margin-top: 2.4rem;
    border-radius: .8rem;
    font-size: 1.6rem;
    line-height: 2.1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`