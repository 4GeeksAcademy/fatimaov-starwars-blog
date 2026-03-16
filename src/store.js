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
    case "GET_CHARACTERS":

      const { characters } = action.payload

      return ({
        ...store,
        characters: characters
  })
    default:
      throw Error('Unknown action.');
  }
}
