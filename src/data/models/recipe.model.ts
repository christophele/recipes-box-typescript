export interface IRecipeList {
    allRecipes: IRecipeItem[];
  }

export interface IRecipeItem {
    id: number;
    title: string;
    image: string;
    imageType: string;
}