import styled from "styled-components"

export const Container = styled.span`
    font-family: 'roboto';
    font-size: 1.2rem;
    line-height: 1.4rem;
    padding: .5rem 1.6rem;
    border: none;
    border-radius: .8rem;

    margin-right: 6px;

    /* color: ${({ theme }) => theme.COLORS.WHITE_800}; */
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`