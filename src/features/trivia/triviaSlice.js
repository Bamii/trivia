import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchTrivia as fetchTriviaFromAPI } from './triviaAPI';
import { cache as Cache } from "../../utils";
let cache;
try {
  cache = Cache();
} catch(e) {
  throw new Error(e);
}

export const initialState = {
  questions: [],
  answers: [],
  loading: false,
  error: null,
  currentQuestion: 0,
  done: true,
};

export const fetchTrivia = createAsyncThunk(
  'trivia/fetchTrivia',
  async () => fetchTriviaFromAPI()
);

export const triviaSlice = createSlice({
  name: 'trivia',
  initialState: cache.get('trivia') || initialState,
  reducers: {
    answerCurrentQuestion: (state, { payload }) => {
      if(state.currentQuestion + 1 > state.questions.length)
        return;

      const question = state.questions[state.currentQuestion];

      // answering a question moves to the next one...
      state.answers[state.currentQuestion] = { ...question, user_answer: payload }
      state.currentQuestion += 1;

      if(state.currentQuestion === state.questions.length)
        state.done = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrivia.pending, (state) => {
        state.loading = true;
        state.questions = [];
        state.answers = [];
        state.currentQuestion = 0;
      })
      .addCase(fetchTrivia.fulfilled, (state, action) => {
        state.error = null;
        state.done = false;
        state.questions = action.payload;
        state.answers = action.payload.map(question => question);
        state.currentQuestion = 0;
        state.loading = false;
      })
      .addCase(fetchTrivia.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
      })
  },
});

export const { answerCurrentQuestion } = triviaSlice.actions;

export const selectTrivia = (state) => state.trivia;

export default triviaSlice.reducer;
