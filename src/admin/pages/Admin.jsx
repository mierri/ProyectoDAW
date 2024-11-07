import { GraphicsSection, RecentEvaluations, Sidebar, Stats, Topbar } from "../components"

export const Admin = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="p-[20px] w-[80%]">
        <Topbar />
        <Stats />
        <RecentEvaluations />
        <GraphicsSection />
      </div>
    </div>
  )
}
