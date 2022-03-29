import React, { useEffect, useState } from 'react';
import Friendd from '../Friendd/Friendd';

const Friend = () => {
    const [friends, setfriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setfriends(data))
    }, [])

    return (
        <div>
            <h2>Hello Friends</h2>
            <p><span>Tk day{friends.length}</span></p>

            {friends.map(friend => <Friendd friend={friend} key={friend.id}></Friendd>)}


        </div >
    );
};

export default Friend;