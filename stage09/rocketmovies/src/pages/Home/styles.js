import styled from 'styled-components'

export const Container = styled.div`
    .div_default {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
    .div1 {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
    .div2 {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
    .div3 {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }

    
`