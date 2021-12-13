import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUserDetail, renderUserDetail } from '../../../redux/Actions/actions-users';
import Styles from './UserDetail.styles';
import defaultProfilePhoto from "../../../assets/img/profilephoto.svg";
import emailIcon from "../../../assets/img/iconos/users/email.svg";
import phoneIcon from "../../../assets/img/iconos/users/phone.svg";
import whatsappIcon from "../../../assets/img/iconos/users/whatsapp.svg";
import editRoutineIcon from "../../../assets/img/iconos/editIcon.svg";
import { Link } from 'react-router-dom';

function UserDetail() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.userDetail)

    const closeCard = () => {
        dispatch(renderUserDetail(false));
        dispatch(getUserDetail("CLEAR"))
    }

    return (
        <Styles.Container>
            <Styles.Card>
                <Styles.CloseButton onClick={() => closeCard()}>X</Styles.CloseButton>
                <Styles.CardTop>
                        <Styles.ProfilePhoto src={user.imageData ? `data:image/jpeg;base64, ${user.imageData}` : defaultProfilePhoto} alt={user.name + "-profile"} imageBackground={user.imageData ? true : false}/>
                    <Styles.UserNamesContainer>
                        <Styles.UserNames>{user.name}</Styles.UserNames>
                        <Styles.UserNames>{user.lastname}</Styles.UserNames>
                        <Styles.UserType>{user.isprofessor ? "Profesor" : "Cliente"}</Styles.UserType>
                    </Styles.UserNamesContainer>
                    <Styles.ContactContainer>
                        <Styles.ContactInfoContainer>
                            <Styles.ContactIcon src={whatsappIcon} alt="whatsapp-icon"/>
                            {
                                user.phoneNumber ? 
                                <Styles.ContactLink href={`https://api.whatsapp.com/send?phone=549${user.phoneNumber}`}>{`+54 9 ${user.phoneNumber}`}</Styles.ContactLink> :
                                <Styles.ContactValue>{"Desconocido"}</Styles.ContactValue>
                            }
                        </Styles.ContactInfoContainer>
                        <Styles.ContactInfoContainer>
                            <Styles.ContactIcon src={emailIcon} alt="email-icon"/>
                            <Styles.ContactLink href={`mailto:${user.email}`}>{user.email}</Styles.ContactLink>
                        </Styles.ContactInfoContainer>
                    </Styles.ContactContainer>
                </Styles.CardTop>
                <Styles.CardMiddle>
                    <Styles.DataContainer>
                        <Styles.Data>
                            <Styles.DataTitle>Datos</Styles.DataTitle>
                            <Styles.DataInfoContainer>
                                <Styles.DataKey>Plan Personalizado</Styles.DataKey>
                                <Styles.DataValueContainer>
                                    <Styles.DataValue>{user.customRoutine ? "Si" : "No"}</Styles.DataValue>
                                    <Link to={`/session/routines/${user.id}/${user.name}`}>
                                        <Styles.DataButton>
                                            <img src={editRoutineIcon} alt="edit-custom-routine" />
                                        </Styles.DataButton>
                                    </Link>
                                </Styles.DataValueContainer>
                            </Styles.DataInfoContainer>
                            <Styles.DataInfoContainer>
                                <Styles.DataKey>Día de Pago</Styles.DataKey>
                                <Styles.DataValue>{user.paymentday ? user.paymentday.slice(5, 10).split("-").reverse().join("/") : "-"}</Styles.DataValue>
                            </Styles.DataInfoContainer>
                            <Styles.DataInfoContainer>
                                <Styles.DataKey>Estado</Styles.DataKey>
                                <Styles.DataValue>{user.status === "ACTIVO" ? "Activo" : "Inactivo"}</Styles.DataValue>
                            </Styles.DataInfoContainer>
                            <Styles.DataInfoContainer>
                                <Styles.DataKey>Pagado</Styles.DataKey>
                                <Styles.DataValue>Si</Styles.DataValue>
                            </Styles.DataInfoContainer>
                            {/* <Styles.DataClassKey>Clases</Styles.DataClassKey>
                            <Styles.DataClassValue>Zumba - Martes 18hs</Styles.DataClassValue>
                            <Styles.DataClassValue>Bachata - Jueves 16hs</Styles.DataClassValue> */}
                        </Styles.Data>
                    </Styles.DataContainer>
                    <Styles.StadisticsContainer>
                        <Styles.DataSheet>
                            <Styles.StadisticsTitle>Ficha Técnica</Styles.StadisticsTitle>
                            <Styles.DataSheetSubContainer>
                                <Styles.StadisticsInfoContainer>
                                    <Styles.StadisticsKey>Edad:</Styles.StadisticsKey>
                                    <Styles.StadisticsValue>{user.age ? user.age : "-"}</Styles.StadisticsValue>
                                </Styles.StadisticsInfoContainer>
                                <Styles.StadisticsInfoContainer>
                                    <Styles.StadisticsKey>Altura:</Styles.StadisticsKey>
                                    <Styles.StadisticsValue>{user.height ? user.height : "-"}</Styles.StadisticsValue>
                                </Styles.StadisticsInfoContainer>
                                <Styles.StadisticsInfoContainer>
                                    <Styles.StadisticsKey>Peso:</Styles.StadisticsKey>
                                    <Styles.StadisticsValue>{user.weight ? user.weight : "-"}</Styles.StadisticsValue>
                                </Styles.StadisticsInfoContainer>
                            </Styles.DataSheetSubContainer>
                        </Styles.DataSheet>
                        <Styles.Stadistics>
                            <Styles.StadisticsTitle> Estadísticas</Styles.StadisticsTitle>
                            <Styles.StadisticsSubContainer>
                                <Styles.StadisticsInfoContainer>
                                    <Styles.StadisticsKey>Sentadilla por Detrás:</Styles.StadisticsKey>
                                    <Styles.StadisticsValue>{user.backsquat ? user.backsquat : "-"}</Styles.StadisticsValue>
                                </Styles.StadisticsInfoContainer>
                                <Styles.StadisticsInfoContainer>
                                    <Styles.StadisticsKey>Pecho Plano:</Styles.StadisticsKey>
                                    <Styles.StadisticsValue>{user.benchpress ? user.benchpress : "-"}</Styles.StadisticsValue>
                                </Styles.StadisticsInfoContainer>
                                <Styles.StadisticsInfoContainer>
                                    <Styles.StadisticsKey>Arranques:</Styles.StadisticsKey>
                                    <Styles.StadisticsValue>{user.snatch ? user.snatch : "-"}</Styles.StadisticsValue>
                                </Styles.StadisticsInfoContainer>
                                <Styles.StadisticsInfoContainer>
                                    <Styles.StadisticsKey>Cargadas:</Styles.StadisticsKey>
                                    <Styles.StadisticsValue>{user.clean ? user.clean : "-"}</Styles.StadisticsValue>
                                </Styles.StadisticsInfoContainer>
                                <Styles.StadisticsInfoContainer>
                                    <Styles.StadisticsKey>Marca de Tiempo:</Styles.StadisticsKey>
                                    <Styles.StadisticsValue>{user.running && user.running !== "0" ? user.running : "-"}</Styles.StadisticsValue>
                                </Styles.StadisticsInfoContainer>
                                <Styles.StadisticsInfoContainer>
                                    <Styles.StadisticsKey>Dominadas:</Styles.StadisticsKey>
                                    <Styles.StadisticsValue>{user.pullups ? user.pullups : "-"}</Styles.StadisticsValue>
                                </Styles.StadisticsInfoContainer>
                            </Styles.StadisticsSubContainer>
                        </Styles.Stadistics>
                    </Styles.StadisticsContainer>
                </Styles.CardMiddle>
                <Styles.CardBottom>
                    {/* <Styles.GreenButton>Editar</Styles.GreenButton>
                    <Styles.GreenButton>Eliminar</Styles.GreenButton> */}
                </Styles.CardBottom>
            </Styles.Card>
        </Styles.Container>
    )
}

export default UserDetail
