import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 12rem;
    > h2 { 
        display: flex;
        font-size: 1.6rem;
    }

`

export const NewMovie = styled.button`
    width: 20.7rem;
    height: 4.8rem;
    padding: 3.2rem auto;
    border-radius: .8rem;
    font-size: 1.6rem;
    line-height: 2.1rem;
    
    > span {
        svg {
                width: 20px;
                height: 20px;
            }
        
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .8rem;
    };

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`