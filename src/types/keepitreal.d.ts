// Declare module types for files
declare module "*.module.scss";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";

declare const Netlify: {
    env: NetlifyEnv;
};
declare interface NetlifyEnv {
    get: (key: string) => string | undefined;
}
