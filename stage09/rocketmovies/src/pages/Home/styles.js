import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    
    grid-template-areas:
        "header"
        "content";
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    margin: 0 12rem;
    
    > div {
        width: 113.7rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 5rem;
    }

    > h2 { 
        display: flex;
        font-size: 1.6rem;
        white-space: nowrap;
    }

`