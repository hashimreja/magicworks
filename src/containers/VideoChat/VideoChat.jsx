import React, { useEffect , useState } from "react";
import io from "socket.io-client";
import Peer from 'peerjs-client';
let socket = null;

const VideoChat = ({match}) => {
    const [roomId , setRoomId] = useState('');

    useEffect(() => {

    //peerjs
    const myPeer = new Peer(undefined,{
        host : 'localhost',
        port : '5000',
        path : '/peerjs/peer'
    })
    socket = io("http://localhost:5000");
    setRoomId(match.params.id);
    myPeer.on("open", (id) => {
        socket.emit("join-room", roomId, id);
      });
    const videoGrid = document.getElementById("video-grid");
    const video = document.createElement("video");
    video.muted = true;

    function connectToNewUser(userId, stream) {
        const call = myPeer.call(userId, stream);
        const video = document.createElement("video");
        call.on("stream", (userVideoStream) => {
          addVideoStream(video, userVideoStream);
        });
        call.on("close", () => {
          video.remove();
        });
      }

    const addVideoStream = (video, stream) => {
      video.srcObject = stream;
      video.addEventListener("loadedmetadata", () => {
        video.play();
      });
      videoGrid.append(video);
    };
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: true,
      })
      .then((stream) => {
        addVideoStream(video, stream);
        myPeer.on("call", (call) => {
            call.answer(stream);
            const video = document.createElement("video");
            call.on("stream", (userVideoStream) => {
              addVideoStream(video, userVideoStream);
            });
          });
        socket.on("user-connected", (userId) => {
            connectToNewUser(userId, stream);
          });
      });
    return () => {};
  }, [match.params.id]);
  return <div id="video-grid"></div>;
};

export default VideoChat;
