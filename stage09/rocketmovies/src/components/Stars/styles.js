import styled from "styled-components"

export const Container = styled.div`
    > span {
    margin-top: .8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    > * {
        margin-left: .6rem;
    }
    }
`
