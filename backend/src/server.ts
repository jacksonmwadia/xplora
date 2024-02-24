import express, {NextFunction, Request, Response, json} from 'express';
import userRoute from './router/user.router';
import cors from 'cors'
import auth_router from './router/auth.routh';
import tripRoute from './router/tour.router';
import bookingRoute from './router/booking';

const app = express();

app.use(json())
app.use(cors())
app.use("/users", userRoute)
app.use('/auth', auth_router)
app.use('/trips', tripRoute)
app.use('/booking', bookingRoute)

app.use((error:Error, req:Request, res:Response, next:NextFunction)=>{
res.json({
    message:error.message
})
})

let port:number = 4100;
app.listen(port,()=>{
    console.log(`server listening on ${port}`);
    
})
