import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import PersonagensService from "../../service/PersonagensService";

const personagensService = new PersonagensService();

export const getPersonagens = createAsyncThunk(
    'personagens/get',
    async () => {
        const response = await personagensService.listarPersonagens()
        return response
    },
)

const initialState = {
    lastUpdateDateTime: null,
    loading: false,
    success: false,
    error: null,
    data: []
}

const personagensSlice = createSlice({
    name: 'personagens',
    initialState,
    reducers: {
        listarPersonagens: (state, action) => {
            // this.listarPersonagensIniciado(state, action)
            try {
                this.getPersonagens();
                // this.listarPersonagensSucesso(state, action, data);
            } catch (error) {
                // this.listarPersonagensErro(state, action);
            }
        },
        listarPersonagensIniciado: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = false;
            state.data = [];
        },
        listarPersonagensSucesso: (state, action, data) => {
            // state.lastUpdateDateTime = moment().toISOString(),
            state.lastUpdateDateTime = null;
            state.loading = false;
            state.error = null;
            state.success = true;
            state.data = [...action.data]
        },
        listarPersonagensErro: (state, action) => {
            state.loading = false;
            state.error = action.error;
            state.success = false;
            state.data = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPersonagens.fulfilled, (state, action) => {
            state.data = action.payload
        })
    },
});

export const { listarPersonagens } = personagensSlice.actions;
export default personagensSlice.reducer;