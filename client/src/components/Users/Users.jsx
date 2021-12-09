import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchUsers } from '../../redux/Actions/actions-users';
import Styles from './Users.styles';
import UsersGrid from './UsersGrid';
// import UsersList from './UsersList';

function Users() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    function handleChange(e) {
        setSearch(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchUsers(search))
    }

    return (
        <Styles.Container>
            <Styles.NavBar>
                <Styles.Title>Usuarios</Styles.Title>
                <form style={{display: 'flex', flexDirection: 'row', alignItems: "center", marginLeft: "5rem"}} onSubmit={handleSubmit}>
                    <Styles.SearchBar type="text" placeholder="Introduce un nombre o apellido..." autoCorrect="off" onChange={handleChange} value={search} />
                    {/* <Styles.SearchButton type="submit" value="Buscar" /> */}
                </form>
                {/* <Styles.Filter name="filter">
                    <option value="default" hidden>Filtrar por...</option>
                    <option value="Rating" disabled>Estado de pago</option>
                        <option value="0-5">Pago</option>
                        <option value="5-0">No pago</option>
                    <option value="Rating" disabled>Activo/Inactivo</option>
                        <option value="0-5">Activo</option>
                        <option value="5-0">Inactivo</option>
                </Styles.Filter> */}
            </Styles.NavBar>
            <Styles.UsersContainer>
                <UsersGrid />
            </Styles.UsersContainer>
        </Styles.Container>
    )
}

export default Users;
