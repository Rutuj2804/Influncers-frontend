import socketio from "socket.io-client";
import React from 'react'

export const socket = socketio.connect(`${process.env.REACT_APP_SOCKETS_URL}`, { transports : ['websocket'] });
export const SocketContext = React.createContext();