import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5rem 12rem;
    
    > h2 { 
        display: flex;
        font-size: 1.6rem;
        white-space: nowrap;
    }

`