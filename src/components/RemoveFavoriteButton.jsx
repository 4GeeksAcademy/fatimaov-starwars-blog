export const RemoveFavoriteButton = ({onSelectedButton}) => {

    return (

        <>
            <button onClick={() => onSelectedButton()}  className="btn p-0 ms-2">
                <i className="fa-solid fa-trash"></i>
            </button>
        </>

    );
};