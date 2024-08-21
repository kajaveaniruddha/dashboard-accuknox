import React, { useEffect, useState } from "react";
import { ChartNoAxesCombined, ChartPie } from "lucide-react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import Navbar from "./components/common/navbar";
import PieChartDonutWithText from "./components/common/pie-chart-donut-with-text";
import { CSPM as initialCSPM, CWPP as initialCWPP } from "./constants/data";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SheetForm from "./components/common/sheet-form";

function App() {
  // State to hold CSPM and CWPP widgets
  const [CSPM, setCSPM] = useState(initialCSPM);
  const [CWPP, setCWPP] = useState(initialCWPP);

  // Load data from localStorage on startup
  useEffect(() => {
    const storedCSPM = JSON.parse(localStorage.getItem("CSPM"));
    const storedCWPP = JSON.parse(localStorage.getItem("CWPP"));

    if (storedCSPM) setCSPM(storedCSPM);
    if (storedCWPP) setCWPP(storedCWPP);
  }, []);

  // Save data to localStorage whenever CSPM or CWPP changes
  useEffect(() => {
    localStorage.setItem("CSPM", JSON.stringify(CSPM));
    localStorage.setItem("CWPP", JSON.stringify(CWPP));
  }, [CSPM, CWPP]);

  return (
    <main className="bg-slate-200 min-h-screen pb-20">
      <Navbar />
      <section className="font-semibold container">
        <h1 className=" my-4 font-bold tracking-tight">CNAPP Dashboard</h1>
        <div className=" flex flex-col mt-4">
          <h2 className="mt-2">CSPM Executive Dashboard</h2>
          <div className=" grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-4 text-sm">
            {CSPM.map((widget) => (
              <>
                {widget.chartData.length === 0 ? (
                  <Card className="p-6 flex flex-col items-center justify-center h-[270px] font-medium">
                    <ChartPie size={70} color="#adb5bd" />
                    No Graph Data Available!
                  </Card>
                ) : widget.visible ? (
                  <PieChartDonutWithText
                    title={widget.title}
                    chartData={widget.chartData}
                  />
                ) : null}
              </>
            ))}
            <Card className="flex flex-col items-center justify-center">
              <Sheet>
                <SheetTrigger>
                  <Button variant={"outline"}>+ Add Widget</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Add Widget</SheetTitle>
                    <SheetDescription>
                      Personalise your dashboard by adding the following widget
                    </SheetDescription>
                    <SheetForm
                      CSPM={CSPM}
                      setCSPM={setCSPM}
                      CWPP={CWPP}
                      setCWPP={setCWPP}
                    />
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </Card>
          </div>
        </div>

        <div className=" flex flex-col mt-4">
          <h2 className="mt-2">CWPP Executive Dashboard</h2>
          <div className=" grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-4 text-sm">
            {CWPP.map((widget) => (
              <>
                {widget.chartData.length === 0 ? (
                  <Card className=" flex flex-col items-center justify-center h-[270px] font-medium">
                    <ChartNoAxesCombined size={70} color="#adb5bd" />
                    No Graph Data Available!
                  </Card>
                ) : widget.visible ? (
                  <PieChartDonutWithText
                    title={widget.title}
                    chartData={widget.chartData}
                  />
                ) : null}
              </>
            ))}
            <Card className="flex flex-col items-center justify-center">
              <Sheet>
                <SheetTrigger>
                  <Button variant={"outline"}>+ Add Widget</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Add Widget</SheetTitle>
                    <SheetDescription>
                      Personalise your dashboard by adding the following widget
                    </SheetDescription>
                  </SheetHeader>
                  <SheetForm
                    CSPM={CSPM}
                    setCSPM={setCSPM}
                    CWPP={CWPP}
                    setCWPP={setCWPP}
                  />
                </SheetContent>
              </Sheet>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
