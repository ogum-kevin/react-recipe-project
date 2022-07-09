import React from "react";
import ImageCard from "../recipePageCards/ImageCard";
import IngredientCard from "../recipePageCards/IngerdientsCard";
import ProcedureCard from "../recipePageCards/ProcedureCard";

export default function Recipe() {
  return (
    <div>
      <ImageCard />
      <IngredientCard />
      <ProcedureCard />
      <h1>Recipe</h1>
    </div>
  );
}
