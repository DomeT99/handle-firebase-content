//GENERIC COMPONENTS
export type Button = {
  type?: "button" | "submit" | "reset";
  color?: "primary" | "secondary" | "info" | "warning" | "error" | "success";
  icon?: string;
  label?: string;
  size?: string | number;
  isFullWidth?: boolean;
};
export type Header = {
  title: string;
  icon?: string;
  goBack?: boolean;
};
export type Input = {
  rules?: any;
  label?: string;
  clearable?: boolean;
};
export type InputFile = Input & {
  multiple: boolean;
};

//LAYOUT
export type DefaultLayout = {
  header: Header;
  scrollable?: boolean;
};

// Projects type associated
export type Project = {
  id: string;
  title: string;
  description: string;
};
export type ProjectDetails = Project & {
  images?: File[];
  cover?: File[];
};
export type Filter = {
  title?: string;
  description?: string;
};
