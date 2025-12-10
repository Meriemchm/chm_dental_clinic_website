import { StatsCards } from "./stats-cards";

import { Container } from "../ui/container";
import { StatsData } from "@/data/StatsData";

const StatsSection = () => {
  return (
    <div className="w-full ">
      <Container className="w-full py-16">
        <StatsCards stats={StatsData} />
      </Container>
    </div>
  );
};
export default StatsSection;
