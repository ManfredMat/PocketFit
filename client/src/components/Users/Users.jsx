import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchUsers } from '../../redux/Actions/actions-users';
import Styles from './Users.styles';
import UsersGrid from './UsersGrid';
import SearchIcon from "../../assets/img/iconos/users/search.svg"
import UserDetail from './UserDetail/UserDetail';
// import UsersList from './UsersList';

function Users() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const renderUserDetail = useSelector(state => state.users.renderUserDetail);

    function handleChange(e) {
        setSearch(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchUsers(search))
    }

    return (
        <Styles.Container>
            {
                renderUserDetail ? <UserDetail /> : null
            }
            <Styles.NavBar sticky={renderUserDetail ? true : false}>
                <Styles.Title>Usuarios</Styles.Title>
                <Styles.NavBarContainer>
                    <Styles.SearchBarContainer onSubmit={handleSubmit}>
                        <Styles.SearchBar type="text" placeholder="Introduce un nombre o apellido..." autoCorrect="off" onChange={handleChange} value={search} />
                        <Styles.SearchButton onClick={handleSubmit}>
                            <img src={SearchIcon} alt="search-icon" />
                        </Styles.SearchButton>
                    </Styles.SearchBarContainer>

                    <Styles.SortContainer>
                        <Styles.NavBarLabel>Ordenar</Styles.NavBarLabel>
                        <Styles.Sort name="sort">
                            <option value="default" hidden>Elige una opción...</option>
                            <option value="Name" disabled>Nombre</option>
                                <option value="a-z">A-Z</option>
                                <option value="z-a">Z-A</option>
                            <option value="Lastname" disabled>Apellido</option>
                                <option value="a-z">A-Z</option>
                                <option value="z-a">Z-A</option>
                        </Styles.Sort>
                    </Styles.SortContainer>

                    <Styles.FilterContainer>
                        <Styles.NavBarLabel>Filtrar</Styles.NavBarLabel>
                        <Styles.Filter name="filter">
                            <option value="default" hidden>Elige una opción...</option>
                            <option value="paystatus" disabled>Estado de pago</option>
                                <option value="PAGO">Pago</option>
                                <option value="NO-PAGO">No pago</option>
                            <option value="status" disabled>Activo/Inactivo</option>
                                <option value="ACTIVO">Activo</option>
                                <option value="INACTIVO">Inactivo</option>
                        </Styles.Filter>
                    </Styles.FilterContainer>
                </Styles.NavBarContainer>
            </Styles.NavBar>
            <Styles.UsersContainer>
                <UsersGrid />
            </Styles.UsersContainer>
        </Styles.Container>
    )
}

export default Users;
