import styled from "styled-components";

const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
`;

const TituloEstilizado = styled.h1`
    max-width: 300px;
    font-size: 40px;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    padding: 0 64px;
    color: white;
`;

const Banner = ({texto, backgroundImage}) => {
    return (
        <FigureEstilizada $backgroundImage={backgroundImage}>
            <TituloEstilizado>
                {texto}
            </TituloEstilizado>
        </FigureEstilizada>
    )
}

export default Banner;