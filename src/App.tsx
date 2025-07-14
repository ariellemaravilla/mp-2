import CocktailRecipes from "./components/CocktailRecipes.tsx";
// import styled from "styled-components";
import {useEffect, useState} from "react";
import type {Cocktail} from "./interfaces/Cocktails";

export default function App() {
    const [drink, setDrink] = useState<Cocktail[]>([]);

    useEffect(() => {
        async function fetchDrink(): Promise<void> {
            const rawData = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
            const {drinks} : {drinks: Cocktail[]} = await rawData.json();
            setDrink(drinks);
        }
        fetchDrink()
            .then(() => console.log("Success: Data Fetched!"))
            .catch((e: Error) => console.log("Error: Data not fetched successfully!" + e));
    }, [drink.length]);

    return (
        <CocktailRecipes drink={drink}/>
        // <>
        //     {
        //         drink.map((item: Cocktail) =>
        //             <div>
        //                 <h2>{item.strDrink}</h2>
        //                 <p>{item.strAlcoholic}</p>
        //                 <img src={item.strDrinkThumb} alt={item.strDrink} width="200" />
        //                 <p>{item.strInstructions}</p>
        //             </div>
        //         )
        //     }
        // </>
    );


}

