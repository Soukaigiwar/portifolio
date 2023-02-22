import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.GRAY_600};

    /* margin-left: 6.4rem;
    margin-right: 6.4rem; */
    border-radius: 1.0rem;
    margin-bottom: .8rem;

    > input {
        height: 5.6rem;
        width: 100%;
        
        padding: 1.9rem 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE_900};
        background: transparent;
        border: 0;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

    }

    > svg {
        margin-left: 16px;
    }


`
