export const initialStore = () => {
  return {
    people: [],
    planets: [],
    vehicles: [],
    favs: [],
  }
    ;
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "LOAD_DATA":

      const { people, planets, vehicles } = action.payload

      return ({
        ...store,
        people: people,
        planets: planets,
        vehicles: vehicles,
      })

    case "ADD_FAVORITE":

      const { element } = action.payload;
      
      return ({
        ...store,
        favs: store.favs.includes(element) ? store.favs : [...store.favs, element]
      });

    case "REMOVE_FAVORITE":

      const { elementToRemove } = action.payload;
      
      return ({
        ...store,
        favs: store.favs.filter((element) => elementToRemove !== element)
      });


    default:
      throw Error('Unknown action.');
  }
}
