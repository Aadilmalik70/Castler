import React, { useEffect, useState } from "react";
import "./Profilecard.css";
import loader from "../images/Loader.gif"
function ProfileCard(props) {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState(props.userId);

    const url = `https://reqres.in/api/users/${userId}`;
    const fetchData = async () => {
        const res = await fetch(url);
        const jsonData = await res.json();
        setUserData(jsonData);
        setLoading(false);
        console.log(userData);
    }
    useEffect(() => {
        fetchData();
    }, [userId])



    return (
        <>

            {
                loading ? <img className="card-container" src={loader} /> :
                    <div className="card-container">
                        <header>
                            <img src={userData.data.avatar} alt={props.name} />
                        </header>
                        <div className="main" >
                            <h2 className="bold-text">Name :</h2>
                            <h2 className="normal-text">
                                {userData.data.first_name + " " + userData.data.last_name}
                            </h2>
                        </div>
                        <div className="main" >
                            <h2 className="bold-text">Email :</h2>
                            <h2 className="normal-text">
                                {userData.data.email}
                            </h2>
                        </div>
                        <div className="main" >
                            <h2 className="bold-text">Description :</h2>
                            <h2 className="normal-text">
                                Random text
                            </h2>
                        </div>
                    </div>
            }


        </>
    );
}

export default ProfileCard;