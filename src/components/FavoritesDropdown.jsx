import useGlobalReducer from "../hooks/useGlobalReducer";
import { RemoveFavoriteButton } from "./RemoveFavoriteButton";

export const FavoritesDropdown = () => {

    const { store, dispatch } = useGlobalReducer();

    function removeFavorite(elementToRemove) {
        dispatch({
            type: "REMOVE_FAVORITE",
            payload: { elementToRemove: elementToRemove}
        })
    }

    return (

        <>
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites
                    <span className="badge text-bg-secondary ms-2">{store.favs.length}</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end text-end border-0 border-end rounded-0" style={{ width: 300 }}>
                    {store.favs.length !== 0 ? store.favs.map((element, i) => {
                        return <li key={i} className="me-2">
                                    {element}
                                    <RemoveFavoriteButton onSelectedButton={() => removeFavorite(element)} />
                                </li>
                    }) : <li className="text-end me-2"><i>Empty</i></li>}
                </ul>
            </div>
        </>

    );
};