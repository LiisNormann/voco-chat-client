export const socket = new WebSocket('ws://localhost:4000');
export async function connectToServer() {
    return new Promise((resolve, reject) => {
        const timer = setInterval(() => {
            if(socket.readyState === 1) {
                clearInterval(timer)
                resolve(socket)
            }
        }, 10);
    });
}