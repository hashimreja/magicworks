import React , {useState} from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import {Link} from 'react-router-dom';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Buttons/Button';
import styles from './JoinRoom.module.css';

const JoinRoom = () => {
    const [name , setName] = useState('');
    const [room , setRoom] = useState('');

    return(
        <Aux>
        <div className={styles.mainContainer}>
        <div className={styles.outerContainer}>
            <span> Share the room name with your friends and  chat on!!</span>
        <span className={styles.Label}>Name</span>
        <Input type="text" name="name" id="name" onChange={e => setName(e.target.value)}/>  
         <span className={styles.Label}>Room</span>
         <Input  type="text" name="room" id="room" onChange={e => setRoom(e.target.value)}/> 
         <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat/room?name=${name}&room=${room}`}>
         <Button type="submit" >Submit</Button>
         </Link>  
         </div>
         </div>  
        </Aux>
    )
}

export default JoinRoom;