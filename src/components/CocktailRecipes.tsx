import styled from "styled-components";
import type {Cocktail} from "../interfaces/Cocktails.ts";

// ----- Styling -----

const DrinkGrid=styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    padding: 20px;
`;

const DrinkDiv=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 5px solid #8D9A8;
    border-radius: 20px;
    padding: 0.2vw;
    background-color: #F2F9F2;
    
    //experimenting with cursor and background color interaction
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: #f0fff0;
    }
    
    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

const DrinkImage = styled.img`
  width: 11vw;
  height: 11vw;
  border-radius: 20px;
  margin: 1vw;
  align-items: center;
`;

const DrinkText = styled.div`
    width: 25vw;
    padding: 10px;
    color: #3B5161;
`;

const DrinkName=styled.div`
    font-size: 3vw;
    font-family: 'Pacifico';
`;

const DrinkAlcoholic=styled.div`
    font-size: 2vw;
    padding-top: 0.5vw;
    padding-bottom: 0.3vw;
`;

const DrinkInstruction=styled.div`
    font-size: 1.8vw;
`;

const PageHeader=styled.h1`
    font-size: 6.5vw;
    font-family: "Source Serif 4", serif;
    text-align: center;
    align-content: center;
    width: 90%;
    background-color: #4b8f8d;
    color: #ecfbee;
    border-radius: 40px;
    margin: 0 auto;
    padding: 2vw;
`;


// ----- Main Logic -----

export default function CocktailRecipes(props : { drink:Cocktail[] }) {
    return (
        <>
            <p></p>
            <DrinkGrid>
                <PageHeader>A Selection of Cocktail Recipes 🍸</PageHeader>
                {props.drink.map((item: Cocktail) => (
                    <DrinkDiv key={item.strDrink}>
                        <DrinkImage src={item.strDrinkThumb} alt={item.strDrink} />
                        <DrinkText>
                            <DrinkName><strong>{item.strDrink}</strong></DrinkName>
                            <DrinkAlcoholic><em>{item.strAlcoholic}</em></DrinkAlcoholic>
                            <DrinkInstruction>{item.strInstructions}</DrinkInstruction>
                        </DrinkText>
                    </DrinkDiv>
            ))}
                <footer>Created by Arielle Maravilla</footer>
            </DrinkGrid>
        </>
    );
}