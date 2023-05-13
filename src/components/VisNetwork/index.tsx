import { useEffect, useRef } from "react";
import { Network } from "vis-network";
import { ArtEdge, ArtNode } from "../../utils";
import BrokenImage from "../../assets/no_imagge.png";

const VisNetwork = (props: { nodes: ArtNode[]; edges: ArtEdge[] }) => {
  const visJsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const network =
      visJsRef.current &&
      new Network(
        visJsRef.current,
        { nodes: props.nodes, edges: props.edges },
        {
          autoResize: true,
          layout: { improvedLayout: false },
          nodes: {
            shape: "image",
            brokenImage: BrokenImage,
            font: {
              color: "#f1f5f9",
              size: 14, // px
              background: "none",
              strokeWidth: 0, // px
              strokeColor: "#ffffff",
              align: "center",
              multi: false,
              vadjust: 0,
            },
            color: {
              border: "#94a3b8",
              background: "#334155",
              highlight: { border: "#f59e0b", background: "#475569" },
            },
          },
        }
      );
    network?.on("selectNode", (event: { nodes: string[] }) => {
      if (event.nodes?.length === 1) {
        console.log(event.nodes[0]);
      }
    });
    // Use `network` here to configure events, etc
  }, [visJsRef, props]);

  return (
    <div
      className="w-full h-full border-2 border-slate-500 rounded-lg"
      ref={visJsRef}
    />
  );
};

export default VisNetwork;
