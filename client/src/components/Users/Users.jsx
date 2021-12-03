import Styles from './Users.styles';
import UsersGrid from './UsersGrid';
import UsersList from './UsersList';

function Users() {
    return (
        <Styles.Container>
            <Styles.NavBar>
                <Styles.SearchBar type="text" placeholder="Buscar..." />
                <Styles.Filter name="filter">
                    <option value="default" hidden>Filtrar por...</option>
                    <option value="Rating" disabled>Estado de pago</option>
                        <option value="0-5">Pago</option>
                        <option value="5-0">No pago</option>
                    <option value="Rating" disabled>Activo/Inactivo</option>
                        <option value="0-5">Activo</option>
                        <option value="5-0">Inactivo</option>
                </Styles.Filter>
            </Styles.NavBar>
            <Styles.UsersContainer>
                <UsersGrid />
            </Styles.UsersContainer>
        </Styles.Container>
    )
}

export default Users
