import ReactFlow, { Controls, Background, Edge, Node } from "reactflow";
import "reactflow/dist/base.css";

const Flow = (props: { nodes: Node[]; edges: Edge[] }) => {
  return (
    <div className="h-full max-w-[1000px] w-full border-2 border-amber-500 rounded-2xl p-4">
      <ReactFlow
        nodes={props.nodes}
        edges={props.edges}
        proOptions={{ hideAttribution: true }}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Flow;
