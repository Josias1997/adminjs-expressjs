import formidableMiddleware from "express-formidable";

// Extracts types of function arguments
// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any
  ? A
  : never;

export type FormidableOptions = ArgumentTypes<typeof formidableMiddleware>[0];
