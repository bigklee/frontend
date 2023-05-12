import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const Archive = () => {
  const { data, filters } = useLoaderData() as {
    data: string[];
    filters: string[];
  };
  const filter = useState<string[]>([]);

  useEffect(() => {
    console.log(data, filters, filter);
  }, [data]);
  return <div>Archive</div>;
};
