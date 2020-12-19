const users = [];

module.exports.addUser = (name,room,id) => {
    let userName = name.trim().toLowerCase();
    let userRoom = room.trim().toLowerCase();
    console.log(userName,userRoom)
    const userCheck = users.find(user => user.userName === userName);
    if(userCheck){
        return{
            error : 'user name already taken'
        }
    }
    users.push({id,userName,userRoom});
}

module.exports.getUser = (id) => {
    let getUser = users.findIndex(user => user.id === id);
    if(getUser !== -1){
        getUser = users.find(user => user.id === id);
        return getUser;    
    }
}

module.exports.removeUser = (id) => {
    const removeUser = users.findIndex(user => user.id === id);
    if(removeUser !== -1){
        return users.splice(removeUser,1)[0];
    }
}

module.exports.usersInRoom = (room) => {
    return users.filter(user => user.userRoom === room);
}