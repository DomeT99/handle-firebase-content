export type Button = {
   type?: 'button' | 'submit' | 'reset';
   color?: 'primary' | 'secondary' | 'info' | 'warning' | 'error' | 'success';
   icon?: string;
   label?: string;
   size?: string | number;
   isFullWidth?: boolean;
   loading?: boolean;
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
