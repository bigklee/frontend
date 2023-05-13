import { Node } from "reactflow";
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
  image: string;
};
export type ArtEdge = { from: number; to: number };

export const artworkToNode = (a: Artwork): ArtNode => {
  return {
    id: a.id,
    label: a.title_en as string,
    image:
      "http://martini.buero.io:8080/images/" + a.linked_works?.[0].toString(),
    group: Math.random() > 0.5 ? "Lukas" : "Loosli",
  };
};

export const createEdges = (a: ArtNode, b: ArtNode): ArtEdge => ({
  from: a.id,
  to: b.id,
});
