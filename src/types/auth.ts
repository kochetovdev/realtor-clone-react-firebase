import { FieldValue } from "firebase/firestore";

export interface FormDataAuth {
  name: string;
  email: string;
  password?: string;
  timestamp?: FieldValue;
}

export interface FormDataInitial {
  name: string;
  email: string;
  password: string;
}
