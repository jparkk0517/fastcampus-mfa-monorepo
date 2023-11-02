import {
  PayloadAction,
  combineReducers,
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";

export interface Email {
  id: number;
  sender: string;
  receiver: string;
  content: string;
}

const initialState: Email[] = [
  {
    id: 1,
    sender: "나귀찮",
    receiver: "열정맨",
    content: "쉬면서 합시다!!",
  },
  {
    id: 2,
    sender: "열정맨",
    receiver: "나귀찮",
    content: "MFA 해야지~!!!",
  },
  {
    id: 3,
    sender: "상남자",
    receiver: "하남자",
    content: "ㅋㅋㅋㅋㅋ",
  },
  {
    id: 4,
    sender: "하남자",
    receiver: "상남자",
    content: "ㅜㅜ",
  },
];

const emailSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    deleteEmail(emails, action: PayloadAction<number>) {
      return emails.filter((email) => email.id !== action.payload);
    },
  },
});

const rootReducer = combineReducers({
  emails: emailSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export const { deleteEmail } = emailSlice.actions;
export const emailSelector = (state: ReturnType<typeof store.getState>) =>
  state.emails;

export default store;
