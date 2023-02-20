import styled from "styled-components"

export const Container = styled.header`
    grid-area: header;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    width: 100%;
    height: 11.6rem;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    
    justify-content: space-between;
    align-items: center;

    
    > h1 {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        margin-left: .9rem;
        border-radius: 50%;
        border: solid 1px; 
        border-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-left: 16px;
        line-height: 24px;

        span {
            font-size: 14px;
            line-height: 1.8rem;
            font-weight: 400;
            color: ${({ theme }) => theme.COLORS.GRAY_700};
        }

        strong {
            font-size: 1.4rem;
            font-weight: 700;
            line-height: 1.8rem;
            color: ${({ theme }) => theme.COLORS.WHITE_900};
            white-space: nowrap;
        }
    }
`