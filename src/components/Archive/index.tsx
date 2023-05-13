import { useLoaderData, useNavigate } from "react-router-dom";
import { Artwork } from "../../types";
import { ArtEdge, ArtNode, artworkToNode, createFilter } from "../../utils";
import VisNetwork from "../VisNetwork";
import { useEffect, useState } from "react";

export const Archive = () => {
  const { data } = useLoaderData() as {
    data: Artwork[];
    filters: string[];
  };
  const [filterYear, setFilterYear] = useState(false);
  const [groupKeywords, setGroupKeywords] = useState(false);

  const [groupNodes, setGroupNodes] = useState<ArtNode[] | null>(null);
  const [filterNodes, setFilterNodes] = useState<ArtNode[] | null>(null);

  const [groupEdges, setGroupEdges] = useState<ArtEdge[] | null>(null);
  const [filterEdges, setFilterEdges] = useState<ArtEdge[] | null>(null);

  const years = [
    1926, 1929, 1937, 1933, 1937, 1913, 1935, 1909, 1919, 1921, 1935,
  ];

  useEffect(() => {
    filterYear
      ? setFilterNodes([
          {
            id: 0,
            label: "Year: 1931",
            shape: "box",
            color: { background: "#334155", border: "#f59e0b" },
          },
        ])
      : setFilterNodes(null);
  }, [filterYear]);

  useEffect(() => {
    if (filterNodes !== null && groupNodes !== null) {
      setFilterEdges(
        groupNodes.map((gN) => ({ from: filterNodes[0].id, to: gN.id }))
      );
      setNodes(
        groupNodes
          .flatMap((gN) => data.filter((dP) => dP.keywords?.includes(gN.label)))
          .filter((a) => years.includes(a.year ?? 0))
          .map(artworkToNode)
      );
    }
    if (filterNodes !== null && groupNodes === null) {
      setFilterEdges(nodes.map((n) => ({ from: filterNodes[0].id, to: n.id })));
      setNodes(
        data.filter((a) => years.includes(a.year ?? 0)).map(artworkToNode)
      );
    }
    if (filterNodes === null && groupNodes === null) {
      setNodes(data.map(artworkToNode));
    }
  }, [groupNodes, filterNodes]);

  useEffect(() => {
    groupKeywords
      ? setGroupNodes([
          { id: 1, label: "Kopf", shape: "box" },
          { id: 2, label: "Stadt", shape: "box" },
          { id: 3, label: "Staat", shape: "box" },
          { id: 4, label: "Winter", shape: "box" },
        ])
      : setGroupNodes(null);
  }, [groupKeywords]);

  useEffect(() => {
    if (groupNodes !== null) {
      setNodes(
        groupNodes
          .flatMap((gN) => data.filter((dP) => dP.keywords?.includes(gN.label)))
          .map(artworkToNode)
      );
      setGroupEdges(
        groupNodes.flatMap((gN) =>
          createFilter(
            data.filter((dP) => dP.keywords?.includes(gN.label)),
            gN
          )
        )
      );
    }
  }, [groupNodes]);

  const [nodes, setNodes] = useState<ArtNode[]>(data.map(artworkToNode));

  return (
    <div className="h-full w-full flex flex-row rounded-lg gap-x-12">
      <div className="w-[600px] flex flex-col gap-6">
        <input
          type="search"
          placeholder="search artworks..."
          className="bg-slate-600 p-2 text-slate-50 rounded-lg"
        ></input>
        <div className="flex flex-row gap-6">
          {!filterYear ? (
            <button
              onClick={() => setFilterYear(true)}
              className="bg-slate-600 hover:bg-slate-500 text-slate-50 rounded-lg p-1"
            >
              Add Filter
            </button>
          ) : (
            <button
              onClick={() => setFilterYear(false)}
              className="bg-slate-200 text-slate-800 rounded-lg p-1"
            >
              Year: 1931
            </button>
          )}
          {!groupKeywords ? (
            <button
              onClick={() => setGroupKeywords(true)}
              className="bg-slate-600 hover:bg-slate-500 text-slate-50 rounded-lg p-1"
            >
              Add Grouping
            </button>
          ) : (
            <button
              onClick={() => setGroupKeywords(false)}
              className="bg-slate-200 text-slate-800 rounded-lg p-1"
            >
              Group: Keywords
            </button>
          )}
          {filterYear || groupEdges ? (
            <button className=" bg-slate-600 hover:bg-slate-500 text-slate-50 rounded-lg p-1">
              Create Collection
            </button>
          ) : null}
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
      <VisNetwork
        nodes={[...nodes, ...(filterNodes ?? []), ...(groupNodes ?? [])]}
        edges={[...(filterEdges ?? []), ...(groupEdges ?? [])]}
        isGraph={false}
      />
    </div>
  );
};

const ArtworkEntry = (props: { title: string; work_nr: string }) => {
  const navigate = useNavigate();
  return (
    <li
      role="button"
      onClick={() => navigate("/artwork")}
      className="flex justify-between text-slate-50 p-2 hover:bg-slate-500"
    >
      <div className="font-bold">{props.title}</div>
      <div>{props.work_nr}</div>
    </li>
  );
};
