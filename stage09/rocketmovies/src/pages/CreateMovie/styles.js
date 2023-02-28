import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";
    
    > main {
        grid-area: content;
        margin: 4rem auto;
        overflow-y: auto;
        height: calc(100vh - 18rem);

        &::-webkit-scrollbar {
            width: 2.4rem;
        }
        
        &::-webkit-scrollbar-track {
            background: transparent;
        }

        &::-webkit-scrollbar-thumb {
            height: 4rem;
            border: .8rem solid;
            border-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            border-radius: 9999px;
            background-color: ${({ theme }) => theme.COLORS.PINK};
        }
    }    
`

export const Form = styled.form`
    width: 113.7rem;
    
    > h2 {
        margin-top: 2.4rem;
    }
    
    .double_input {
        display: flex;
        justify-content: space-between;
        gap: 4rem;
        margin: 4rem auto 4rem;
        
    }

    > h3 {
        margin: 2.4rem auto;
        color: ${({ theme }) => theme.COLORS.GRAY_800};
    }

    .tag_item {
        padding: 1.6rem;
        border-radius: .8rem;
        background-color: #0D0C0F;
    }

    .button_area {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4rem;
        padding: 1.6rem;
        border-radius: .8rem;
        background-color: #0D0C0F;
        
        > button:nth-child(1) {
            width: 100%;
            height: 4.8rem;
            padding: 3.2rem auto;
            margin-top: 2.4rem;
            border-radius: .8rem;
            font-size: 1.6rem;
            line-height: 2.1rem;
            font-weight: 500;
            
            display: flex;
            justify-content: center;
            align-items: center;
            gap: .8rem;
            cursor: pointer;

            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            color: ${({ theme }) => theme.COLORS.PINK};
        }

        > button:nth-child(2) {
            font-weight: 500;
            cursor: pointer;
        }
    }
`
