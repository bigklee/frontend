import { useLoaderData } from "react-router-dom";
import { Artwork } from "../../types";
import { artworkToNode, createEdges } from "../../utils";
import VisNetwork from "../VisNetwork";

export const Archive = () => {
  const { data, filters } = useLoaderData() as {
    data: Artwork[];
    filters: string[];
  };

  const nodes = data.map(artworkToNode);

  const edges1 = nodes
    .filter((n) => n.group === "Lukas")
    .map((n) => createEdges(n, { id: 1, label: "Lukas" }));

  const edges2 = nodes
    .filter((n) => n.group === "Loosli")
    .map((n) => createEdges(n, { id: 2, label: "Loosli" }));

  const edges3 = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
  ];

  const edges = [...edges1, ...edges2, ...edges3];

  nodes.push({ id: 0, label: "Paul Klober", shape: "box" });
  nodes.push({ id: 2, label: "Loosli", shape: "box" });
  nodes.push({ id: 1, label: "Lukas", shape: "box" });

  return (
    <div className="h-full w-full flex flex-row rounded-lg gap-x-12">
      <div className="w-[600px] flex flex-col gap-6">
        <input
          type="search"
          placeholder="search artworks..."
          className="bg-slate-600 p-2 text-slate-50 rounded-lg"
        ></input>
        <div className="flex flex-row gap-6">
          <button className="bg-slate-600 hover:bg-slate-500 text-slate-50 rounded-lg p-2">
            Add Filter
          </button>
          <button className="bg-slate-600 hover:bg-slate-500 text-slate-50 rounded-lg p-2">
            Add Grouping
          </button>
        </div>
        <div
          role="list"
          className="overflow-auto rounded-lg border-2 border-slate-500"
        >
          <ul
            className="[&>*:nth-child(odd)]:bg-slate-700
    [&>*:nth-child(even)]:bg-slate-800"
          >
            {data.map((d) => (
              <ArtworkEntry
                title={d.title_en as string}
                work_nr={d.work_no as string}
              />
            ))}
          </ul>
        </div>
      </div>
      <VisNetwork nodes={nodes} edges={edges} />
    </div>
  );
};

const ArtworkEntry = (props: { title: string; work_nr: string }) => {
  return (
    <li className="flex justify-between text-slate-50 p-2 hover:bg-slate-500">
      <div className="font-bold">{props.title}</div>
      <div>{props.work_nr}</div>
    </li>
  );
};
