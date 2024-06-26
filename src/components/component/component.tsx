import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ResponsiveBar } from "@nivo/bar";
import { JSX, ClassAttributes, HTMLAttributes } from "react";
import { barChartData } from "@/Data/componentdata"; // Import the data from data.js

export function Component() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Projections vs Actuals</CardTitle>
      </CardHeader>
      <CardContent>
        <BarChart className="aspect-[15/4]" />
      </CardContent>
    </Card>
  );
}

function BarChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={barChartData} // Use the imported data here
        keys={["count"]}
        indexBy="name"
        margin={{ top: 20, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["yellow"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 10,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "8px",
              textTransform: "capitalize",
              borderRadius: "1px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}
