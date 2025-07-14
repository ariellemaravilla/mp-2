// import styled from "styled-components";
import type {Cocktail} from "../interfaces/Cocktails.ts";

export default function CocktailRecipes(props : { drink:Cocktail[] }) {
    return (
        props.drink.map((item: Cocktail) =>
            <div>
                <h2>{item.strDrink}</h2>
                <p>{item.strAlcoholic}</p>
                <img src={item.strDrinkThumb} alt={item.strDrink} width="200" />
                <p>{item.strInstructions}</p>
            </div>
        )
    )
}