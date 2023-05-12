import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/base.css";

const edges = [
  { id: "1-2", source: "1", target: "2", label: "to the", type: "step" },
];

const nodes = [
  {
    id: "1",
    data: { label: "Hello" },
    position: { x: 0, y: 0 },
    type: "input",
  },
  {
    id: "2",
    data: { label: "World" },
    position: { x: 100, y: 100 },
  },
];

function Flow() {
  return (
    <div className="h-full max-w-[1000px] w-full border-2 border-amber-500 rounded-2xl p-4">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        proOptions={{ hideAttribution: true }}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
