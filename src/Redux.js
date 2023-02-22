import {configureStore} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
// creer une action createSlice
const todoSlice = createSlice({
   name:"todo",
   initialState : [
    {id: 1, text:"faire le ménage", faire:true},
    {id : 2 ,text : "conduire", faire:false},
    {id : 3 ,text : "faire les courses", faire:false},
    {id : 4 ,text : "faire a manger", faire:true}
   ],

 reducers:{
AjoutTach:(state,action) => { 
    const newtach={
        id:Date.now(),
        text:action.payload,
        faire:false
    }
    state.push(newtach);
},
filtreTache:(state,action)=> {
 const tache = state.find(t=> t.id === action.payload);
 tache.faire =  !tache.faire;
},
// modifTache :(state,action) => {
//     const modtach=state.find(t=>t.id==action.payload);
//     modtach.text==modtach.action.payload;
// },
suppTach: (state,action) => {
   state = state.filter(t => t.id !== action.payload);
   return state;
},

 }
})


export const{AjoutTach,filtreTache,suppTach} = todoSlice.actions;

export const store = configureStore({
    reducer:{
        todo:todoSlice.reducer
    },
})
