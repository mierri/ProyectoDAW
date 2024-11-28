import { createSlice } from '@reduxjs/toolkit';

export const maestrosSlice = createSlice({
    name: 'maestros',
    initialState: {
        maestros: [],
        maestrosPorFacultades: [],
    },
    reducers: {
        onSetMaestros: (state, { payload } ) => {
            state.maestros = payload;
        },
        onSetMaestrosPorFacultades: (state, { payload } ) => {
            state.maestrosPorFacultades = payload;
        },
    }
});

// Action creators are generated for each case reducer function
export const { onSetMaestros, onSetMaestrosPorFacultades } = maestrosSlice.actions;