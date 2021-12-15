import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filtered, searchUsers, sorter } from '../../redux/Actions/actions-users';
import Styles from './Users.styles';
import UsersGrid from './UsersGrid';
import SearchIcon from "../../assets/img/iconos/users/search.svg"
import UserDetail from './UserDetail/UserDetail';
// import UsersList from './UsersList';

function Users() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [isSearch, setIsSearch] = useState(false);
    const renderUserDetail = useSelector(state => state.users.renderUserDetail);
    const filter = useSelector(state => state.users.filter);
    let sort = useRef();

    useEffect(() => {
        let value = sort.current;
        value.value = "default";
    }, [filter])

    function searchOnChange(e) {
        setSearch(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchUsers(search))
        setIsSearch(previousState => !previousState)
    };

    function sortOnChange(e) {
        dispatch(sorter(e.target.value));
    };

    function filterOnChange(e) {
        dispatch(filtered(e.target.value));
    };


    return (
        <Styles.Container>
            {
                renderUserDetail ? <UserDetail /> : null
            }
            <Styles.NavBar sticky={renderUserDetail ? true : false}>
                <Styles.Title>Usuarios</Styles.Title>
                <Styles.NavBarContainer>
                    <Styles.SearchBarContainer onSubmit={handleSubmit}>
                        <Styles.SearchBar type="text" placeholder="Introduce un nombre o apellido..." autoCorrect="off" onChange={searchOnChange} value={search} />
                        <Styles.SearchButton onClick={handleSubmit}>
                            <img src={SearchIcon} alt="search-icon" />
                        </Styles.SearchButton>
                    </Styles.SearchBarContainer>

                    <Styles.SortContainer>
                        <Styles.NavBarLabel>Ordenar</Styles.NavBarLabel>
                        <Styles.Sort name="sort" ref={sort} onChange={sortOnChange}>
                            <option value="default" hidden>Elige una opción...</option>
                            <option value="Name" disabled>Nombre</option>
                                <option value="na-z">A-Z</option>
                                <option value="nz-a">Z-A</option>
                            <option value="Lastname" disabled>Apellido</option>
                                <option value="aa-z">A-Z</option>
                                <option value="az-a">Z-A</option>
                        </Styles.Sort>
                    </Styles.SortContainer>

                    <Styles.FilterContainer>
                        <Styles.NavBarLabel>Filtrar</Styles.NavBarLabel>
                        <Styles.Filter name="filter" onChange={filterOnChange}>
                            <option value="default" hidden>Elige una opción...</option>
                                <option value="no-filters">Sin filtros</option>
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
                <UsersGrid search={isSearch} searchValue={setSearch}/>
            </Styles.UsersContainer>
        </Styles.Container>
    )
}

export default Users;
