export interface IRecipeList {
    recipes?: IRecipeItem[];
  }

export interface IRecipeItem {
    id: number;
    title: string;
    image: string;
    imageType: string;
}