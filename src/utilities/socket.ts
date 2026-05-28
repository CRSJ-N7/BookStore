import { io, Socket } from "socket.io-client";
import { tokenStorage } from "../storage/tokenStorage";

let socket: Socket | null = null;

export function getSocket(): Socket {
  if (!socket) {
    socket = io("http://localhost:3000", {
      auth: {
        token: tokenStorage.getAccess(),
      },
    });
  }
  return socket;
}

export function disconnectSocket() {
  socket?.disconnect();
  socket = null;
}

// export const handleNotification = (cb: (data: { bookId: number, message: string } ) ) => {
//   const innerCb = (data: { bookId: number; message: string }) => {
//     cb(data);
//   }
//   socket?.on("notification", innerCb)

//   return () => {
//     socket?.off('notification', innerCb)
//   }
// }
