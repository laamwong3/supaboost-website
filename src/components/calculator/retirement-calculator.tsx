"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, CreditCard, HelpCircle, TrendingUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function RetirementCalculator() {
  // User input state
  const [currentAge, setCurrentAge] = useState<number>(35);
  const [retirementAge, setRetirementAge] = useState<number>(67);
  const [currentSalary, setCurrentSalary] = useState<number>(85000);
  const [superBalance, setSuperBalance] = useState<number>(100000);
  const [employerContribution, setEmployerContribution] =
    useState<number>(11.0);
  const [personalContribution, setPersonalContribution] = useState<number>(0);
  const [expectedReturn, setExpectedReturn] = useState<number>(7.5);
  const [inflationRate] = useState<number>(2.5);
  const [desiredIncome, setDesiredIncome] = useState<number>(60000);
  const [lifeExpectancy] = useState<number>(90);

  // Results state
  const [projectedBalance, setProjectedBalance] = useState<number>(0);
  const [annualRetirementIncome, setAnnualRetirementIncome] =
    useState<number>(0);
  const [incomeYears, setIncomeYears] = useState<number>(0);
  const [retirementGap, setRetirementGap] = useState<number>(0);
  const [chartData, setChartData] = useState<
    Array<{ age: number; balance: number }>
  >([]);

  // Calculate retirement projections
  useEffect(() => {
    // Years until retirement
    const yearsToRetirement = retirementAge - currentAge;

    // Calculate future balance
    let balance = superBalance;
    const yearlyData: Array<{ age: number; balance: number }> = [];
    let salary = currentSalary;

    // Annual real return (adjusted for inflation)
    const realReturn =
      (1 + expectedReturn / 100) / (1 + inflationRate / 100) - 1;

    // Project balance year by year
    for (let year = 0; year <= yearsToRetirement; year++) {
      // Add to chart data
      yearlyData.push({
        age: currentAge + year,
        balance: Math.round(balance),
      });

      if (year < yearsToRetirement) {
        // Add employer contribution
        balance += salary * (employerContribution / 100);

        // Add personal contribution
        balance += salary * (personalContribution / 100);

        // Add investment returns
        balance = balance * (1 + expectedReturn / 100);

        // Increase salary with inflation
        salary = salary * (1 + inflationRate / 100);
      }
    }

    // Calculate retirement years and income
    const retirementYears = lifeExpectancy - retirementAge;

    // Simple annual income calculation (balance divided by years)
    const simpleAnnualIncome = balance / retirementYears;

    // Add retirement phase to chart data
    let retirementBalance = balance;
    let calculatedIncomeYears = 0;
    for (let year = 1; year <= retirementYears; year++) {
      retirementBalance = Math.max(0, retirementBalance - desiredIncome);
      retirementBalance = retirementBalance * (1 + realReturn);

      yearlyData.push({
        age: retirementAge + year,
        balance: Math.round(retirementBalance),
      });

      // If balance depletes, set the incomeYears
      if (retirementBalance <= 0 && calculatedIncomeYears === 0) {
        calculatedIncomeYears = retirementAge + year - retirementAge;
      }
    }

    // If balance doesn't deplete, set income years to full retirement period
    if (retirementBalance > 0) {
      calculatedIncomeYears = retirementYears;
    }

    // Calculate gap between desired and projected
    const gap = desiredIncome - simpleAnnualIncome;

    setProjectedBalance(Math.round(balance));
    setAnnualRetirementIncome(Math.round(simpleAnnualIncome));
    setIncomeYears(calculatedIncomeYears);
    setRetirementGap(gap > 0 ? Math.round(gap) : 0);
    setChartData(yearlyData);
  }, [
    currentAge,
    retirementAge,
    currentSalary,
    superBalance,
    employerContribution,
    personalContribution,
    expectedReturn,
    inflationRate,
    desiredIncome,
    lifeExpectancy,
  ]);

  // Format currency
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Card className="mx-auto w-full max-w-4xl">
      <CardHeader className="bg-muted/30">
        <div className="flex items-center gap-2">
          <Calculator className="h-6 w-6 text-primary" />
          <CardTitle>Retirement Calculator</CardTitle>
        </div>
        <CardDescription className="text-base">
          Plan your retirement with our interactive calculator to estimate your
          future superannuation balance and income.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs defaultValue="inputs" className="mt-4">
          <TabsList className="mb-6">
            <TabsTrigger value="inputs">Your Details</TabsTrigger>
            <TabsTrigger value="results">Projection Results</TabsTrigger>
          </TabsList>

          <TabsContent value="inputs" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between">
                    <Label htmlFor="currentAge">
                      Current Age: {currentAge}
                    </Label>
                  </div>
                  <Slider
                    id="currentAge"
                    value={[currentAge]}
                    min={18}
                    max={70}
                    step={1}
                    onValueChange={([value]) => setCurrentAge(value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <div className="flex justify-between">
                    <Label htmlFor="retirementAge">
                      Retirement Age: {retirementAge}
                    </Label>
                  </div>
                  <Slider
                    id="retirementAge"
                    value={[retirementAge]}
                    min={Math.max(currentAge + 1, 55)}
                    max={75}
                    step={1}
                    onValueChange={([value]) => setRetirementAge(value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="currentSalary">Annual Salary</Label>
                  <div className="relative mt-1">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                      $
                    </span>
                    <Input
                      id="currentSalary"
                      type="number"
                      min={0}
                      step={1000}
                      className="pl-8"
                      value={currentSalary}
                      onChange={(e) => setCurrentSalary(Number(e.target.value))}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="superBalance">Current Super Balance</Label>
                  <div className="relative mt-1">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                      $
                    </span>
                    <Input
                      id="superBalance"
                      type="number"
                      min={0}
                      step={5000}
                      className="pl-8"
                      value={superBalance}
                      onChange={(e) => setSuperBalance(Number(e.target.value))}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between">
                    <Label htmlFor="employerContribution">
                      Employer Contribution: {employerContribution}%
                    </Label>
                  </div>
                  <Slider
                    id="employerContribution"
                    value={[employerContribution]}
                    min={10.5}
                    max={15}
                    step={0.5}
                    onValueChange={([value]) => setEmployerContribution(value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <div className="flex justify-between">
                    <Label htmlFor="personalContribution">
                      Personal Contribution: {personalContribution}%
                    </Label>
                  </div>
                  <Slider
                    id="personalContribution"
                    value={[personalContribution]}
                    min={0}
                    max={15}
                    step={0.5}
                    onValueChange={([value]) => setPersonalContribution(value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <div className="flex justify-between">
                    <Label htmlFor="expectedReturn">
                      Investment Return: {expectedReturn}%
                    </Label>
                  </div>
                  <Slider
                    id="expectedReturn"
                    value={[expectedReturn]}
                    min={4}
                    max={10}
                    step={0.5}
                    onValueChange={([value]) => setExpectedReturn(value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <div className="flex justify-between">
                    <Label htmlFor="desiredIncome">
                      Desired Annual Income: {formatCurrency(desiredIncome)}
                    </Label>
                  </div>
                  <Slider
                    id="desiredIncome"
                    value={[desiredIncome]}
                    min={40000}
                    max={150000}
                    step={1000}
                    onValueChange={([value]) => setDesiredIncome(value)}
                    className="mt-2"
                  />
                </div>
              </div>
            </div>

            <div className="pb-2 pt-4 text-center">
              <Button
                variant="gradient"
                size="lg"
                onClick={() =>
                  (
                    document.querySelector(
                      '[data-value="results"]',
                    ) as HTMLElement
                  )?.click()
                }
              >
                <TrendingUp className="mr-2 h-4 w-4" />
                Calculate Projection
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="results">
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Projected Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">
                    {formatCurrency(projectedBalance)}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    At retirement age {retirementAge}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-chart-1/20 bg-chart-1/5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Annual Income</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-chart-1">
                    {formatCurrency(annualRetirementIncome)}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {incomeYears} years of retirement income
                  </p>
                </CardContent>
              </Card>

              <Card
                className={`${retirementGap > 0 ? "border-chart-3/20 bg-chart-3/5" : "border-chart-2/20 bg-chart-2/5"}`}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Income Gap</CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className={`text-3xl font-bold ${retirementGap > 0 ? "text-chart-3" : "text-chart-2"}`}
                  >
                    {retirementGap > 0
                      ? formatCurrency(retirementGap)
                      : "No Gap"}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {retirementGap > 0
                      ? "Annual shortfall to achieve target"
                      : "You're on track to meet your goal"}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mb-6 rounded-lg bg-muted/20 p-4">
              <h3 className="mb-4 text-lg font-medium">
                Super Balance Projection
              </h3>
              <div className="h-64 md:h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={chartData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="colorBalance"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="var(--primary)"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="var(--primary)"
                          stopOpacity={0.2}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="age"
                      label={{
                        value: "Age",
                        position: "insideBottom",
                        offset: -5,
                      }}
                    />
                    <YAxis
                      tickFormatter={(value: number) => `$${value / 1000}k`}
                      label={{
                        value: "Balance",
                        angle: -90,
                        position: "insideLeft",
                      }}
                    />
                    <Tooltip
                      formatter={(value: number) => formatCurrency(value)}
                      labelFormatter={(value: string) => `Age: ${value}`}
                    />
                    <Area
                      type="monotone"
                      dataKey="balance"
                      stroke="var(--primary)"
                      fillOpacity={1}
                      fill="url(#colorBalance)"
                    />
                    {/* Vertical line at retirement age will be rendered separately */}
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {retirementGap > 0 && (
              <Card className="mb-6 bg-muted/30">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg">
                    <CreditCard className="mr-2 h-5 w-5 text-primary" />
                    How to Close Your Retirement Gap
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <TrendingUp className="h-5 w-5 flex-shrink-0 text-chart-1" />
                      <span>
                        Increase your personal contribution by{" "}
                        {Math.ceil(retirementGap / (currentSalary * 0.01))}% to
                        help close the gap.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <HelpCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>
                        Consider delaying retirement by a few years to increase
                        your super balance.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <Calculator className="h-5 w-5 flex-shrink-0 text-chart-2" />
                      <span>
                        Book a consultation with our superannuation experts for
                        personalized advice.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            )}

            <div className="text-sm text-muted-foreground">
              <p className="mb-2">
                This calculator provides estimates based on the information you
                provide and general assumptions about investment returns and
                inflation rates. Actual results may vary.
              </p>
              <p>
                For personalized superannuation advice, please{" "}
                <a href="/contact" className="text-primary hover:underline">
                  contact our team
                </a>
                .
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="border-t bg-muted/20">
        <Button variant="outline" size="sm" asChild>
          <a href="/advice">Book a Consultation</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
