let id = 1;

export default function manageBand(
  state = {
    bands: [],
  },
  action
) {
  switch (action.type) {
    case "ADD_BAND":
      let band = {
        name: action.name,
        id: id++,
      };

      return { ...state, bands: [...state.bands, band] };
    case "DELETE_BAND":
      return {
        ...state,
        bands: state.bands.filter((band) => band.id !== action.id),
      };
    default:
      return state;
  }
}
