import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
    response: [],
    loading: true,
    error: {},
    simulationModeEnabled: false,
};

export const simulationModeSlice = createSlice({
    name: "simulationmode",
    initialState,
    reducers: {
        setSimulationModeEnabled: (state, action: PayloadAction<boolean>) => {
            state.simulationModeEnabled = action.payload;
        },
    },
});

export const { setSimulationModeEnabled } = simulationModeSlice.actions;
export const simulationModeStateSelector = (state: any) => state.simulationmode;
export default simulationModeSlice.reducer;
