import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const DashBoardPageSkeleton = () => {
  return (
    <div className="DashBoardPage bg-primary min-h-screen flex flex-col items-center justify-center p-6">
      {/* Título skeleton */}
      <div className="h-8 w-48 bg-gray-300 rounded mb-4 animate-pulse"></div>

      <Card className="shadow-xl border bg-gray-100 border-primary/20 rounded-2xl w-full max-w-lg">
        {/* Header skeleton */}
        <CardHeader className="flex flex-col items-center gap-4">
          {/* Avatar skeleton */}
          <div className="w-28 h-28 rounded-full bg-gray-300 animate-pulse"></div>

          {/* Nombre skeleton */}
          <div className="h-6 w-40 bg-gray-300 rounded animate-pulse"></div>

          {/* Biografía skeleton */}
          <div className="space-y-2">
            <div className="h-4 w-64 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-4 w-56 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </CardHeader>

        {/* Content skeleton */}
        <CardContent className="space-y-6">
          <Separator />

          {/* Info skeleton */}
          <div className="grid gap-4 text-sm">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-4 w-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-4 w-32 bg-gray-300 rounded animate-pulse"></div>
              </div>
            ))}
          </div>

          <Separator />

          {/* Redes sociales skeleton */}
          <div className="flex justify-center gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-10 w-10 bg-gray-300 rounded-full animate-pulse"
              ></div>
            ))}
          </div>

          <Separator />

          {/* Botones skeleton */}
          <div className="flex justify-center gap-4">
            <div className="h-10 w-40 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-10 w-40 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
