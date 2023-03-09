import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

// The Global Store
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

{
  /**
note concerning redux 
if you used the below as import in your _app.js
>>>>>>> import { store } from "../stores/store";
then 
the global store should be rewritten like this 

        export const store = configureStore({
          reducer: {
            basket: basketReducer,
          },
        });

but if you import it like this with out distructuring it[store] or without the curly bracket 
>>>>>>import store  from "../stores/store";
then 
you should write the store like this 
          export default configureStore({
                    reducer: {
                      basket: basketReducer,
                    },
                  });

*/
}
