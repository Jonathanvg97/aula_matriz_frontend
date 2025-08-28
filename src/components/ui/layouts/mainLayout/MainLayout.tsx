// import { SideNav } from "@/components/sideNav/SideNav";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="MainLayout">
      <div className="sticky top-0 z-50">{/* <SideNav /> */}</div>
      {children}
    </div>
  );
};
