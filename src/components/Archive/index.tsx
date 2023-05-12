import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const Archive = () => {
  const data = useLoaderData();
  const filter = useState<string[]>([]);

  useEffect(() => {
    console.log(data, filter);
  }, [data]);
  return <div>Archive</div>;
};
