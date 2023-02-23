import styled from "styled-components"

export const Container = styled.div`
    width: 100%;

    a {
            display: flex;
            align-items: center;
            gap: .8rem;
            color: ${({ theme }) => theme.COLORS.PINK };
        }
`
