import IO from 'socket.io-client'

export const Socket = IO('http://localhost:4000')

export default Socket