export type Image = {
   id?: string;
   src: string;
   alt?: string;
};
export type Project = {
   id: string;
   title: string;
   description: string;
};
export type ProjectDetails = Project & {
   images?: File[] | string[];
   cover?: File[];
};
export type Filter = {
   title?: string;
   description?: string;
};
