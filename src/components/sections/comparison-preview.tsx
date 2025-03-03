import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight, BarChart3 } from "lucide-react";
import Link from "next/link";

export function ComparisonPreview() {
  const fundData = [
    {
      name: "Australian Super",
      performanceYr: "8.2%",
      fee: "0.60%",
      insurance: "Included",
      esg: "High",
    },
    {
      name: "Hostplus",
      performanceYr: "9.1%",
      fee: "0.55%",
      insurance: "Optional",
      esg: "Medium",
    },
    {
      name: "AMP Super",
      performanceYr: "7.6%",
      fee: "0.70%",
      insurance: "Included",
      esg: "Medium",
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Fund Comparison
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Compare superannuation funds side by side to find the best option
            for your retirement goals.
          </p>
        </div>
        <div className="flex items-end">
          <Button asChild>
            <Link href="/comparison" className="group">
              Compare All Funds
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>

      <Card className="mt-12 overflow-hidden">
        <CardHeader className="bg-muted/50">
          <CardTitle className="flex items-center">
            <BarChart3 className="mr-2 size-5" />
            Top Performing Superannuation Funds
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fund Name</TableHead>
                <TableHead>1 Year Performance</TableHead>
                <TableHead>Annual Fee</TableHead>
                <TableHead>Insurance</TableHead>
                <TableHead>ESG Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fundData.map((fund) => (
                <TableRow key={fund.name}>
                  <TableCell className="font-medium">{fund.name}</TableCell>
                  <TableCell>{fund.performanceYr}</TableCell>
                  <TableCell>{fund.fee}</TableCell>
                  <TableCell>{fund.insurance}</TableCell>
                  <TableCell>{fund.esg}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>
          Data updated as of March 1, 2025. Past performance is not a reliable
          indicator of future performance.
        </p>
      </div>
    </div>
  );
}
