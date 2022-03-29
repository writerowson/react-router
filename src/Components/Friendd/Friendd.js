import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friendd = (props) => {
    const { name, username, id } = props.friend


    const navigate = useNavigate()
    const showFreiendDetail = () => {
        const path = `./ friend/${id}`
        navigate(path)
    }
    return (
        <div>
            <h2>Name;{name}</h2>
            <button onClick={showFreiendDetail}>:{username}id:{id}</button>
        </div>
    );
};

export default Friendd;