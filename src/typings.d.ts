declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}
declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module '*.webp';
declare module '*.json';

declare const API_HOST: string;
declare const IS_ELECTRON: boolean;
