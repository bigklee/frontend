import KleeBer from "../../assets/klee_ber.jpg";

const artwork = {
  id: 50669,
  title_de: "Katastrophe der Sphinx",
  title_en: "Catastrophe of the Sphinx",
  artist: "Paul Klee",
  year: 1937,
  work_no: "1937, 135 (Qu 15)",
  width: null,
  height: null,
  mat_tech_de: "Ölfarbe auf Grundierung auf Baumwolle",
  mat_tech_en: "oil on primed cotton",
  keywords: ["Sphinx", "Katastrophe", "Ägypten"],
  linked_works: [21293, 35519, 36330, 36453, 50982, 57911, 59218, 60062],
  link_description: null,
  institution: "Zentrum Paul Klee ***",
};

export const Artwork = () => {
  return (
    <div className="w-full h-full flex flex-row rounded-lg border-2 border-amber-500">
      <div className="w-[600px] p-6 flex flex-col gap-6">
        <div className="font-millimetre font-bold text-amber-500 text-3xl">
          {artwork.title_en}
        </div>
        <div className="flex gap-6">
          {[
            { title: "Work Nr.", val: artwork.work_no },
            { title: "Year", val: artwork.year.toString() },
          ].map((p, i) => (
            <FakeInput key={i} title={p.title} val={p.val} />
          ))}
        </div>
        <div className="flex gap-6">
          {[
            { title: "Material/Technique", val: artwork.mat_tech_en },
            { title: "Institution", val: "Zentrum Paul Klee" },
          ].map((p, i) => (
            <FakeInput key={i} title={p.title} val={p.val} />
          ))}
        </div>
        <div className="flex gap-2">
          {artwork.keywords.map((k, i) => (
            <div
              key={i}
              className="bg-slate-800 rounded-full border-2 border-amber-500 p-2 w-fit text-amber-500"
            >
              {k}
            </div>
          ))}
          <div className="bg-slate-800 rounded-3xl aspect-square border-2 border-amber-500 p-2 text-center text-xl text-amber-500">
            +
          </div>
        </div>
        <button className="bg-slate-600 p-2 text-slate-50 rounded-lg w-fit">
          Add Metadata
        </button>
      </div>
      <div className="flex-1 flex bg-slate-900 items-center rounded-r-lg">
        <img src={KleeBer} className="object-contain w-full h-full"></img>
      </div>
    </div>
  );
};

const FakeInput = (props: { title: string; val: string }) => {
  return (
    <div className="flex-col">
      <div className="text-slate-400 text-sm m-1">{props.title}</div>
      <input
        value={props.val}
        className="bg-slate-700 p-1 rounded-lg text-slate-100"
      ></input>
    </div>
  );
};
