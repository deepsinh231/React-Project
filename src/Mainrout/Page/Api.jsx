import React, { useEffect, useState } from 'react';
import Nav from '../Nav';


const Api = () => {
    const [user, setUser] = useState([]);
    // const [users, Let] = useState([]);

    const fetchData = () => {
        return fetch("https://api.opencagedata.com/geocode/v1/json?q=Ahmedabad&key=faed4d9eb29d483a866000c901ccb680")
            .then((response) => response.json())
            .then((data) => setUser(data))
            // .results[0].annotations.DMS
    }
    // console.log(user);
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <Nav />
            <input type="button" value="button" />
            <ul>
                {
                    Object.entries(user).map((userObj, index) => (
                        <li key={index}>
                            {/* {userObj} */}
                            {/* {userObj[1]} */}
                            <br/>
                            {console.log(userObj[0])}
                        </li>

                    ))
                }
            </ul>

        </>
    );
};

export default Api;