import styled from 'styled-components'

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
        width: 113.7rem;
        height: calc(100vh - 18rem);

        .title {
            display: flex;
            align-items: center;
            margin: 2.4rem 0;
            gap: 1.9rem;
            height: 4.7rem;

            * {
                margin-right: 1rem;
            }
            
            h2 {
                font-size: 3.6rem;
                line-height: 4.7rem;
                font-weight: 500;
            }

            svg {
                width: 2rem;
                height: 2rem;
            }
        }

        .author_and_date {
            display: flex;
            align-items: center;
            margin: 2.4rem 0 4rem;
            gap: .8rem;

            span {
                display: flex;
                align-items: center;
                gap: .8rem;

                svg {
                    width: 1.6rem;
                    height: 1.6rem;
                    color: ${({ theme }) => theme.COLORS.PINK};
            }
            }

            img {
                width: 1.6rem;
                border-radius: 50%;
                border: solid 1px; 
                border-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
            }

            h3 {
                font-family: 'roboto', sans-serif;
                font-weight: normal;
                font-size: 1.6rem;
                line-height: 1.8rem;
            }
        }

        .tag_area {
            span {
                margin-bottom: 4rem;

                > div { 
                    font-size: 1.2rem;
                    line-height: 1.4rem;
                    padding: .8rem 1.6rem;
                    margin-right: .8rem;
                    border-radius: .8rem;
                }
            }
        }

        p {
            font-family: 'Roboto Slab';
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 2.1rem;
            text-align: justify;
        }


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