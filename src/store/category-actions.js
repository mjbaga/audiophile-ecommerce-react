import { getCategories } from "utils/Firebase-Api";
import { replaceCategoriesData } from "./category-slice";

export const fetchCategories = () => {
  return async (dispatch) => {
    getCategories().then((response) => {
      let fetchedCategories = [];

      response.docs.forEach((doc) => {
        fetchedCategories.push({...doc.data(), id: doc.id });
      })

      dispatch(replaceCategoriesData(fetchedCategories));
    });
  };
};