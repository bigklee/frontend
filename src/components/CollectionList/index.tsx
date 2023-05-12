import { useNavigate } from "react-router-dom";

type CollectionEntry = {
  title: string;
  author: string;
  path: string;
};

const collections: CollectionEntry[] = [
  { title: "Essentials", author: "Zentrum Paul Klee", path: "essentials" },
  { title: "Stille", author: "Lukas Bärfuss", path: "baerfuss" },
  { title: "Meine Lieblingswerke", author: "Roger Federer", path: "federer" },
];

export const CollectionList = () => {
  return (
    <div
      role="list"
      className="border-2 text-slate-50 border-amber-500 rounded-lg h-full flex flex-col"
    >
      <div className="text-xl pl-4 pr-4 flex justify-between font-bold text-slate-50 border-b-2 border-amber-500">
        <div>Name</div>
        <div className=" w-52">Author</div>
      </div>
      <div className="font-light p-4 text-amber-500">Public</div>
      {collections.map((e, i) => (
        <CollectionEntry key={i} {...e} />
      ))}
      <div className="h-10 flex-1"></div>
      <div className="font-light p-4 text-amber-500">Private</div>
      <div className="font-light italic p-4">No private collections yet...</div>
    </div>
  );
};

const CollectionEntry = (props: {
  title: string;
  author: string;
  path: string;
}) => {
  const navigate = useNavigate();
  return (
    <div
      role="button"
      className="flex justify-between p-4 text-xl hover:bg-slate-600"
      onClick={() => navigate("collection/:" + props.path)}
    >
      <div className="flex flex-col">
        <div>{props.title}</div>
      </div>
      <div className="text-slate-300 w-52 text-lg">{props.author}</div>
    </div>
  );
};
