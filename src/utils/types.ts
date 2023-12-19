//GENERIC COMPONENTS
export type Button = {
  color?: "primary" | "secondary" | "info" | "warning" | "error" | "success";
  icon?: string;
  label?: string;
  size?: string | number;
};
export type Header = {
  title: string;
  icon?: string;
};

//LAYOUT
export type DefaultLayout = {
  header: Header; 
  scrollable?: boolean;
};

// Projects type associated
export type Image = {
  id: string;
  src: string;
  alt?: string;
};
export type Project = {
  id: string;
  title: string;
  description: string;
};
export type ProjectDetails = Project & {
  images: Image[];
  cover: Image;
};
