// This file must be a module. An export is necessary.
export {};

declare global {
  namespace NodeJS {
    // Extend NodeJS Global object to include the fields which we use throughout the app.
    interface Global {
      x: number;
    }
  }
}
