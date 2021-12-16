import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { getAdmin } from "../../redux/Actions/actions-login";
const { REACT_APP_API} = process.env;

function Profile() {
    const dispatch = useDispatch();
    const id = localStorage.getItem("number");
    const adminProfileImage = useSelector(state => state.session.admin.imageData);
    const [file, setFile] = useState();
    
    useEffect(() => {
      dispatch(getAdmin(id))
    }, [id, dispatch]);

    const onChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
    }

    const sendImage = async(e) => {
        const data = new FormData();
        data.append("photo", file);
        
        await axios.put(`${REACT_APP_API}/api/users/${id}`, data, {withCredentials:true, headers: {"content-Type": `multipart/form-data; boundary=${data._boundary}`}})
            .then(res => console.log(res))
            .catch(err => console.log(err));

        window.location.reload(true)
    }

    return (
        <div style={{display: 'flex', flexDirection: "column", alignItems: "center", height: "100%", width: "100%"}}>
            <form>
                <input type="file" accept=".jpg, .jpeg" onChange={(e) => onChange(e)}/>
            </form>
            <button onClick={sendImage}>Enviar</button>
            {
                adminProfileImage ? 
                <img style={{width:"20rem", height: "20rem", objectFit:"cover", borderRadius:"50%"}} src={`data:image/jpeg;base64, ${adminProfileImage}`} alt="admin-profile-img"/>
                :
                <h3>Elija una imagen de perfil</h3>
            }
        </div>
    )
}

export default Profile;
