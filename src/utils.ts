export const classNames = (...args: string[]) =>
  args.reduce((p, c) => p + " " + c, "");

export const pathToTitle = (s: string) => {
  const withoutPath = s.substring(1);
  return withoutPath.charAt(0).toUpperCase() + withoutPath.substring(1);
};
