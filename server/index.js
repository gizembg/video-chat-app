import express from 'express';
import { createServer } from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server,
    {
        cors:
        {
            origin: '*',
            methods: ['GET', 'POST']
        }
    })

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {  //root rout
    res.send('Running');
})

server.listen(PORT,()=> console.log(`Server is running on port ${PORT}`) );

io.on("connection", (socket) => {
	socket.emit("me", socket.id);  //emits msg for my user and passes the spesific socket id

	socket.on("disconnect", () => {   //broadcasts a msg when call ended
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => { //userToCall id of the user we want to call,
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});
});