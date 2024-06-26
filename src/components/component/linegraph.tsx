import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ResponsiveLine } from "@nivo/line";
import { JSX, ClassAttributes, HTMLAttributes } from "react";
import { lineChartData } from "@/Data/linechart"; 

export function Linegraph() {
  return (
    <Card className="h-full w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Total Customers</CardTitle>
      </CardHeader>
      <CardContent>
        <LineChart className="aspect-[12/4]" />
      </CardContent>
    </Card>
  );
}

function LineChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={lineChartData} // Use the imported data here
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear" }}
        axisTop={null}
        axisRight={null}
        axisBottom={{ tickSize: 0, tickPadding: 16 }}
        axisLeft={{ tickSize: 0, tickValues: 5, tickPadding: 16 }}
        colors={["#f1b505", "#f4617e"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: { borderRadius: "9999px" },
            container: { fontSize: "12px", textTransform: "capitalize", borderRadius: "6px" },
          },
          grid: { line: { stroke: "#f3f4f6" } },
        }}
        role="application"
      />
    </div>
  );
}

