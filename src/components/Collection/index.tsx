import { useLoaderData, useNavigate } from "react-router-dom";
import { ArtCollection } from "../../types";
import { useState } from "react";
import VisNetwork from "../VisNetwork";
import { ArtNode, artworkToNode } from "../../utils";

export const Collection = () => {
  const data = useLoaderData() as ArtCollection;

  const [nodes, _] = useState<ArtNode[]>(data.works.map(artworkToNode));
  const [graphIsActive, setGraphActive] = useState(false);

  console.log(nodes);

  const graphEdges = [
    {
      from: 51271,
      to: 58258,
      arrows: { to: true },
      label: "There must be some relation!",
      color: "#f59e0b",
      font: {
        color: "#d4d4d4",
        strokeWidth: 0,
      },
      length: 50,
    },
  ];

  return (
    <div className="h-full w-full flex flex-row rounded-lg gap-x-8">
      <div className="w-[600px] flex flex-col gap-6">
        <input
          type="search"
          placeholder="search artworks..."
          className="bg-slate-600 p-2 text-slate-50 rounded-lg"
        ></input>

        <div className="text-slate-50">Works</div>
        <div
          role="list"
          className="overflow-auto rounded-lg border-2 border-slate-500"
        >
          <ul
            className="[&>*:nth-child(odd)]:bg-slate-700
    [&>*:nth-child(even)]:bg-slate-800"
          >
            {data.works.map((d) => (
              <ArtworkEntry
                title={d.title_en as string}
                work_nr={d.work_no as string}
              />
            ))}
          </ul>
        </div>

        <div className="flex justify-between">
          <div className="text-slate-50">Graphs</div>
          <div
            role="button"
            className="h-8 w-8 bg-slate-600 text-xl font-bold text-center hover:bg-slate-500 text-slate-50 rounded-lg"
          >
            +
          </div>
        </div>
        <div
          role="list"
          className="overflow-auto rounded-lg border-2 border-slate-500"
        >
          <ul
            className="[&>*:nth-child(odd)]:bg-slate-700
    [&>*:nth-child(even)]:bg-slate-800"
          >
            <li
              role="button"
              onClick={() => setGraphActive(!graphIsActive)}
              className="flex justify-between text-slate-50 p-2 hover:bg-slate-500"
            >
              <div className="font-bold">{"Test Test"}</div>
            </li>
          </ul>
        </div>
      </div>
      <VisNetwork
        nodes={[...nodes]}
        edges={[...(graphIsActive ? graphEdges : [])]}
        isGraph={graphIsActive}
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
