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
    default:
      throw Error('Unknown action.');
  }
}
