import { Artwork } from "./types";

export const classNames = (...args: string[]) =>
  args.reduce((p, c) => p + " " + c, "");

export const pathToTitle = (s: string) => {
  const withoutPath = s.substring(1);
  return withoutPath.charAt(0).toUpperCase() + withoutPath.substring(1);
};

export type ArtNode = {
  id: number;
  label?: string;
  group?: string;
  image?: string;
  shape?: "box" | "image";
  color?: {
    background?: string;
    border?: string;
  };
};
export type ArtEdge = { from: number; to: number };

export const artworkToNode = (a: Artwork): ArtNode => {
  return {
    id: a.id,
    label: a.title_en as string,
    shape: "image",
    image:
      "http://martini.buero.io:5000/api/v1/images/random?id=" + a.id.toString(),
    group: Math.random() > 0.5 ? "Lukas" : "Loosli",
  };
};

export const createEdges = (a: ArtNode, b: ArtNode): ArtEdge => ({
  from: a.id,
  to: b.id,
});

export const createFilter = (a: ArtNode[], f: ArtNode): ArtEdge[] =>
  a.map((n) => ({ from: f.id, to: n.id }));
