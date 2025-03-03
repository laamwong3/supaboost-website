import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  Filter,
  Info,
  Search,
  SlidersHorizontal,
} from "lucide-react";

export default function ComparisonPage() {
  const fundData = [
    {
      name: "Australian Super",
      performanceYr1: "8.2%",
      performanceYr3: "7.5%",
      performanceYr5: "8.1%",
      performanceYr10: "9.2%",
      fee: "0.60%",
      adminFee: "$78/year",
      insurance: "Included",
      esg: "High",
      returnRating: 5,
      feeRating: 4,
      serviceRating: 4,
    },
    {
      name: "Hostplus",
      performanceYr1: "9.1%",
      performanceYr3: "8.2%",
      performanceYr5: "8.8%",
      performanceYr10: "9.5%",
      fee: "0.55%",
      adminFee: "$84/year",
      insurance: "Optional",
      esg: "Medium",
      returnRating: 5,
      feeRating: 5,
      serviceRating: 4,
    },
    {
      name: "AMP Super",
      performanceYr1: "7.6%",
      performanceYr3: "6.9%",
      performanceYr5: "7.5%",
      performanceYr10: "8.3%",
      fee: "0.70%",
      adminFee: "$90/year",
      insurance: "Included",
      esg: "Medium",
      returnRating: 3,
      feeRating: 3,
      serviceRating: 4,
    },
    {
      name: "Aware Super",
      performanceYr1: "8.8%",
      performanceYr3: "7.7%",
      performanceYr5: "8.4%",
      performanceYr10: "9.0%",
      fee: "0.58%",
      adminFee: "$72/year",
      insurance: "Included",
      esg: "High",
      returnRating: 4,
      feeRating: 4,
      serviceRating: 5,
    },
    {
      name: "UniSuper",
      performanceYr1: "8.5%",
      performanceYr3: "7.8%",
      performanceYr5: "8.7%",
      performanceYr10: "9.3%",
      fee: "0.50%",
      adminFee: "$96/year",
      insurance: "Optional",
      esg: "High",
      returnRating: 5,
      feeRating: 5,
      serviceRating: 4,
    },
    {
      name: "REST Super",
      performanceYr1: "7.9%",
      performanceYr3: "7.2%",
      performanceYr5: "7.8%",
      performanceYr10: "8.5%",
      fee: "0.62%",
      adminFee: "$76/year",
      insurance: "Included",
      esg: "Medium",
      returnRating: 4,
      feeRating: 4,
      serviceRating: 3,
    },
  ];

  return (
    <main className="py-12">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Superannuation Funds Comparison
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Compare top superannuation funds side by side to find the best
            option for your retirement goals.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row">
          <Card className="lg:w-1/4">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="mr-2 size-5" />
                Filters
              </CardTitle>
              <CardDescription>Refine your comparison</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium">Search</label>
                <div className="relative mt-1">
                  <Search className="absolute left-2 top-2.5 size-4 text-muted-foreground" />
                  <Input className="pl-8" placeholder="Search funds..." />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Fund Type</label>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="industry" className="mr-2" />
                    <label htmlFor="industry" className="text-sm">
                      Industry Fund
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="retail" className="mr-2" />
                    <label htmlFor="retail" className="text-sm">
                      Retail Fund
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="public" className="mr-2" />
                    <label htmlFor="public" className="text-sm">
                      Public Sector Fund
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="corporate" className="mr-2" />
                    <label htmlFor="corporate" className="text-sm">
                      Corporate Fund
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Investment Options
                </label>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="growth" className="mr-2" />
                    <label htmlFor="growth" className="text-sm">
                      Growth
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="balanced" className="mr-2" />
                    <label htmlFor="balanced" className="text-sm">
                      Balanced
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="conservative" className="mr-2" />
                    <label htmlFor="conservative" className="text-sm">
                      Conservative
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">ESG Rating</label>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="high" className="mr-2" />
                    <label htmlFor="high" className="text-sm">
                      High
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="medium" className="mr-2" />
                    <label htmlFor="medium" className="text-sm">
                      Medium
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="low" className="mr-2" />
                    <label htmlFor="low" className="text-sm">
                      Low
                    </label>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Reset Filters
              </Button>
            </CardContent>
          </Card>

          <div className="lg:w-3/4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="mr-2 size-5" />
                    Fund Comparison
                  </CardTitle>
                  <CardDescription>Comparing 6 of 30 funds</CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="gap-1">
                  <SlidersHorizontal className="size-4" />
                  Customize
                </Button>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="performance">
                  <TabsList className="mb-6">
                    <TabsTrigger value="performance">Performance</TabsTrigger>
                    <TabsTrigger value="fees">Fees</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="ratings">Ratings</TabsTrigger>
                  </TabsList>

                  <TabsContent value="performance" className="mt-0">
                    <div className="overflow-x-auto rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="min-w-[150px]">
                              Fund Name
                            </TableHead>
                            <TableHead>1 Year</TableHead>
                            <TableHead>3 Year</TableHead>
                            <TableHead>5 Year</TableHead>
                            <TableHead>10 Year</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {fundData.map((fund) => (
                            <TableRow key={fund.name}>
                              <TableCell className="font-medium">
                                {fund.name}
                              </TableCell>
                              <TableCell>{fund.performanceYr1}</TableCell>
                              <TableCell>{fund.performanceYr3}</TableCell>
                              <TableCell>{fund.performanceYr5}</TableCell>
                              <TableCell>{fund.performanceYr10}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                    <div className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                      <Info className="size-4 shrink-0" />
                      <p>
                        Past performance is not a reliable indicator of future
                        performance. All returns are calculated after fees and
                        taxes.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="fees" className="mt-0">
                    <div className="overflow-x-auto rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="min-w-[150px]">
                              Fund Name
                            </TableHead>
                            <TableHead>Investment Fee</TableHead>
                            <TableHead>Admin Fee</TableHead>
                            <TableHead>Total Fee (on $50k)</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {fundData.map((fund) => (
                            <TableRow key={fund.name}>
                              <TableCell className="font-medium">
                                {fund.name}
                              </TableCell>
                              <TableCell>{fund.fee}</TableCell>
                              <TableCell>{fund.adminFee}</TableCell>
                              <TableCell>
                                {`$${((parseFloat(fund.fee) * 50000) / 100 + parseFloat(fund.adminFee.replace("$", "").replace("/year", ""))).toFixed(2)}/year`}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                    <div className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                      <Info className="size-4 shrink-0" />
                      <p>
                        Fees are based on the balanced investment option and may
                        vary depending on your chosen investment options.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="features" className="mt-0">
                    <div className="overflow-x-auto rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="min-w-[150px]">
                              Fund Name
                            </TableHead>
                            <TableHead>Insurance</TableHead>
                            <TableHead>ESG Rating</TableHead>
                            <TableHead>Mobile App</TableHead>
                            <TableHead>Investment Options</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {fundData.map((fund) => (
                            <TableRow key={fund.name}>
                              <TableCell className="font-medium">
                                {fund.name}
                              </TableCell>
                              <TableCell>{fund.insurance}</TableCell>
                              <TableCell>
                                <Badge
                                  variant={
                                    fund.esg === "High"
                                      ? "default"
                                      : "secondary"
                                  }
                                >
                                  {fund.esg}
                                </Badge>
                              </TableCell>
                              <TableCell>Yes</TableCell>
                              <TableCell>12+</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </TabsContent>

                  <TabsContent value="ratings" className="mt-0">
                    <div className="overflow-x-auto rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="min-w-[150px]">
                              Fund Name
                            </TableHead>
                            <TableHead>Return Rating</TableHead>
                            <TableHead>Fee Rating</TableHead>
                            <TableHead>Service Rating</TableHead>
                            <TableHead>Overall Rating</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {fundData.map((fund) => (
                            <TableRow key={fund.name}>
                              <TableCell className="font-medium">
                                {fund.name}
                              </TableCell>
                              <TableCell>
                                {renderStars(fund.returnRating)}
                              </TableCell>
                              <TableCell>
                                {renderStars(fund.feeRating)}
                              </TableCell>
                              <TableCell>
                                {renderStars(fund.serviceRating)}
                              </TableCell>
                              <TableCell>
                                {renderStars(
                                  Math.round(
                                    (fund.returnRating +
                                      fund.feeRating +
                                      fund.serviceRating) /
                                      3,
                                  ),
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                    <div className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                      <Info className="size-4 shrink-0" />
                      <p>
                        Ratings are based on SuperBoost&apos;s analysis
                        methodology and are updated quarterly.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>
                Understanding Superannuation Fund Comparison
              </CardTitle>
              <CardDescription>
                Key factors to consider when comparing super funds
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Performance</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  While past performance doesn&apos;t guarantee future results,
                  it&apos;s important to consider how a fund has performed over
                  different time periods. Look at 5 and 10-year returns for a
                  more comprehensive view of performance consistency.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Fees</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fees can significantly impact your retirement savings over
                  time. Even small differences in percentage terms can translate
                  to thousands of dollars in the long run. Consider both
                  investment and administration fees.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Insurance</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Many super funds offer life insurance, total and permanent
                  disability (TPD) insurance, and income protection. Compare
                  coverage, premiums, and whether the insurance meets your
                  needs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Investment Options</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Different funds offer varying investment options, from
                  conservative to high growth. Consider your risk tolerance,
                  investment goals, and time horizon when choosing a fund with
                  suitable investment options.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </main>
  );
}

function renderStars(rating: number) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={
            i < rating ? "text-yellow-500" : "text-muted-foreground/30"
          }
        >
          ★
        </span>
      ))}
    </div>
  );
}
