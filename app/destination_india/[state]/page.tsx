import { STATE_DATA } from "./stateData";
import StateHero from "./components/StateHero";
import StateAbout from "./components/StateAbout";
import StateBestTime from "./components/StateBestTime";

export default async function Page({ params }: any) {
  const resolvedParams = await params;
  const slug = resolvedParams.state?.toLowerCase()?.trim();

  const data = STATE_DATA[slug];

  if (!data) return <div>State Not Found</div>;

  return (
    <main className="w-full">
      <StateHero data={data} />

      <StateAbout stateData={data} />
      <StateBestTime stateData={data} />
    </main>
  );
}
