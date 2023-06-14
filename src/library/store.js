import { configureStore, createSlice } from "@reduxjs/toolkit";


const StagiaireSlice = createSlice({
    name:'stagiaire',
    initialState:{
        List_Stagiaire :[{
            image: "https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg",
            nom: "Pablo",
            prenom: "Toki",
            filiere: "SF202"
          },{
            image: "https://st2.depositphotos.com/1662991/8837/i/600/depositphotos_88370500-stock-photo-mechanic-wearing-overalls.jpg",
            nom: "Test",
            prenom: "test",
            filiere: "FS493"
          },{
            image: "https://us.123rf.com/450wm/ferli/ferli2204/ferli220400204/184555967-homme-chauve-excit%C3%A9-criant-d-une-main-serr%C3%A9e.jpg?ver=6",
            nom: "Alex",
            prenom: "test",
            filiere: "FS100"
          }]
    },
    reducers:{
        AjouterStagiaire :(state,action)=>{
            state.List_Stagiaire = [...state.List_Stagiaire, {...action.payload}]
        }
    }
})

export const {AjouterStagiaire} = StagiaireSlice.actions;

const store = configureStore({
    reducer:StagiaireSlice.reducer
})

export default store