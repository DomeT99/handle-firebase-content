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
export type Snackbar = {
   message: string;
   timeout?: number;
   color?: 'primary' | 'secondary' | 'info' | 'warning' | 'error' | 'success';
};
export type ModalConfirm = {
   title: string;
   message: string;
   width?: string | number;
   onConfirm: () => void;
   onCancel: () => void;
};

//LAYOUT
export type DefaultLayout = {
   header: Header;
   scrollable?: boolean;
};
