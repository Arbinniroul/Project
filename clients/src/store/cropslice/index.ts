import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
interface Crop {
  _id: string;
  name: string;
  description: string;
  season: string;
}

interface PredictionResult {
  predictedYield: number;
  confidenceLevel: number;
  recommendations: string[];
}

interface CropState {
  crops: Crop[];
  loading: boolean;
  error: string | null;
  predictionResult: PredictionResult | null;
}

const initialState: CropState = {
  crops: [],
  loading: false,
  error: null,
  predictionResult: null,
};

// Async thunk to fetch crops by ID
export const fetchCropById = createAsyncThunk(
  'crops/fetchCropById',
  async (id: string) => {
    const response = await axios.get(`/api/crops/${id}`);
    return response.data;
  }
);

// Async thunk to fetch crops by month
export const fetchCropsByMonth = createAsyncThunk(
  'crops/fetchCropsByMonth',
  async () => {
    const response = await axios.get('/api/crops/get');
    return response.data;
  }
);

// Async thunk to fetch alternative crops
export const fetchAlternativeCrops = createAsyncThunk(
  'crops/fetchAlternativeCrops',
  async () => {
    const response = await axios.get('/api/crops/alternative');
    return response.data;
  }
);

// Async thunk to fetch customer preference trend
export const fetchCustomerTrend = createAsyncThunk(
  'crops/fetchCustomerTrend',
  async () => {
    const response = await axios.get('/api/crops/customer-trend');
    return response.data;
  }
);

// Async thunk to fetch crop prediction
export const fetchCropPrediction = createAsyncThunk(
  'crops/fetchCropPrediction',
  async (predictionData: { cropType: string, temperature: number, rainfall: number, ph: number }) => {
    const response = await axios.post('/api/prediction', predictionData);
    return response.data; // Assuming the response contains the prediction result
  }
);

// Crop slice
const cropSlice = createSlice({
  name: 'crops',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCropById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCropById.fulfilled, (state, action) => {
        state.loading = false;
        state.crops = [action.payload];
      })
      .addCase(fetchCropById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch crop by ID';
      })
      .addCase(fetchCropsByMonth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCropsByMonth.fulfilled, (state, action) => {
        state.loading = false;
        state.crops = action.payload;
      })
      .addCase(fetchCropsByMonth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch crops by month';
      })
      .addCase(fetchAlternativeCrops.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAlternativeCrops.fulfilled, (state, action) => {
        state.loading = false;
        state.crops = action.payload;
      })
      .addCase(fetchAlternativeCrops.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch alternative crops';
      })
      .addCase(fetchCustomerTrend.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCustomerTrend.fulfilled, (state, action) => {
        state.loading = false;
        state.crops = action.payload;
      })
      .addCase(fetchCustomerTrend.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch customer trend';
      })
      .addCase(fetchCropPrediction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCropPrediction.fulfilled, (state, action) => {
        state.loading = false;
        state.predictionResult = action.payload; // Store the prediction result
      })
      .addCase(fetchCropPrediction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch crop prediction';
      });
  },
});

export default cropSlice.reducer;
