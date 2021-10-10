import useSWR from "swr";
import { Fetcher } from "../lib/Fetcher";

const StatusCounter = () => {
  const { data: stats } = useSWR("/api/analytics", Fetcher);
  console.log(stats);

  return !stats ? "-" : stats;
};

export default StatusCounter;
