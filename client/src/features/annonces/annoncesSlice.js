import React,{useState} from 'react';
import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import axios from 'axios';




const baseUrl = "http://localhost:3001/getannonces";


export const fetchAsyncAnnonces = createAsyncThunk("annonces/fetchAsyncAnnonces",async () => {
    const [pretload, setpretload] = useState(false);
    const [datares, setdatares] = useState({});
    axios.get(baseUrl).then((res) => {
        setdatares(res.data);
        setpretload(true)
    });
    return datares;
})

const initialState = {
    annonces :[]
};

const annoncesSlice = createSlice ({
    name:"annonces",
    initialState,
    reducers :{
        addAnnonces:(state,{ payload}) =>{
            state.annonces = payload;
        },
    },
    extraReducers:{
        [fetchAsyncAnnonces.pending] : () =>{
            console.log("panding");
        },
        [fetchAsyncAnnonces.pending] : (state,{payload}) =>{
            console.log("fetching succes");
            return {...state,annonces:payload}
        },
        [fetchAsyncAnnonces.rejected] : (state,{payload}) =>{
            console.log("Rejected");
        },
    }
});

export const { addAnnonces } = annoncesSlice.actions;
export const getAllAnnonces = (state) => state.annonces.annonces;
export default annoncesSlice.reducer;