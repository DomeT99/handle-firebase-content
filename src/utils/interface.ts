import { type Option } from "./types";

export interface Form {
  type: string;
  name: string;
}

export interface FormText extends Form {
  label?: string;
  placeholder?: string;
}

export interface FormSelect extends Form {
  options?: Option[];
}
