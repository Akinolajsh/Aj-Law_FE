import { useQuery } from "@tanstack/react-query";
import { viewLaw, viewSingleLaw } from "../../Apis/lawApi";

export const useViewAllLaw = () => {
  const { data:getAll } = useQuery({
    queryKey: ["viewLaw"],
    queryFn: viewLaw,
  });
  return { getAll };
};


export const useViewOneLaw = (id:string) => {
  const { data:getOne } = useQuery({
    queryKey: ["viewOne", {id:id}],
    queryFn: ()=> viewSingleLaw(id),
    refetchInterval: 1000
  });
  return { getOne };
};
