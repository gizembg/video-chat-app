import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';
import { AnyTxtRecord } from 'dns';

type SocketSliceType = {
    callAccepted: boolean | null;
    callEnded: boolean| null;
    name: string;
    call: { isReceivingCall: boolean, from:string, name: string, signal:any };
    me: string;
}

const initialState: SocketSliceType = {
    callAccepted: false,
    callEnded: false,
    name: '',
    call: {isReceivingCall:false,from:'', name:'', signal:null},
    me: '',
};



export const socketSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCallAccepted: (state: SocketSliceType, action: PayloadAction<boolean>) => {
            state.callAccepted = action.payload;
        },
        setCallEnded: (state: SocketSliceType, action: PayloadAction<boolean>) => {
            state.callEnded = action.payload;
        },
        setMe: (state: SocketSliceType, action: PayloadAction<any>) => {
            state.me = action.payload;
        },
        setCall: (state: SocketSliceType, action: PayloadAction<any>) => {
            state.call = action.payload;
        },
        setName: (state: SocketSliceType, action: PayloadAction<any>) => {
            state.name = action.payload;
        },
    },
});

export const { setCallAccepted, setCallEnded, setMe, setCall,setName } = socketSlice.actions;

export const selectCallAccepted = (state: RootState) => state.socket.callAccepted;
export const selectCallEnded = (state: RootState) => state.socket.callEnded;
export const selectName = (state: RootState) => state.socket.name;
export const selectCall = (state: RootState) => state.socket.call;
export const selectMe = (state: RootState) => state.socket.me;




export default socketSlice.reducer;
