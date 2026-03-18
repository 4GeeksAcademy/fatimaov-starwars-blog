export const initialStore = () => {
  return {
      characters: [],
      planets: [],
      vehicles: [],
      favs: [],
    }
  ;
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "LOAD_DATA":

      const { characters, planets, vehicles } = action.payload

      return ({
        ...store,
        characters: characters,
        planets: planets,
        vehicles: vehicles,
  })
    default:
      throw Error('Unknown action.');
  }
}
