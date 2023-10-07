import { useQuery } from "@tanstack/react-query";
import { seeLawyerLaw, viewLaw, viewSingleLaw } from "../../Apis/lawApi";

export const useViewAllLaw = () => {
  const { data: getAll } = useQuery({
    queryKey: ["viewLaw"],
    queryFn: viewLaw,
  });
  return { getAll };
};

export const useViewOneLaw = (id: string) => {
  const { data: getOne } = useQuery({
    queryKey: ["viewOne", { id: id }],
    queryFn: () => viewSingleLaw(id),
    refetchInterval: 1000,
  });
  return { getOne };
};

export const useLawyerlaw = (id: string) => {
  const { data: getAllLawyerLaw } = useQuery({
    queryKey: ["viewAllLawyerLaw", { id: id }],
    queryFn: () => seeLawyerLaw(id,),
    // refetchInterval: 1000,
  });
  console.log(getAllLawyerLaw)

  return { getAllLawyerLaw };
};
