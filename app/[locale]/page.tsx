import LeftPanel from "@/components/layout/LeftPanel";
import RightPanel from "@/components/layout/RightPanel";
import MobileNav from "@/components/layout/MobileNav";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <MobileNav />
      <div className="mx-auto max-w-screen-xl px-6 pt-20 lg:flex lg:gap-12 lg:px-24 lg:pt-0">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
}
