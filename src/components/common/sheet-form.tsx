import { Checkbox } from "../ui/checkbox";
import { Separator } from "@/components/ui/separator";

const SheetForm = ({ CSPM, setCSPM, CWPP, setCWPP }: any) => {
  const handleCSPMToggle = (title: string) => {
    const updatedCSPM = CSPM.map((widget: any) =>
      widget.title === title ? { ...widget, visible: !widget.visible } : widget
    );
    setCSPM(updatedCSPM);
    localStorage.setItem("CSPM", JSON.stringify(updatedCSPM));
  };

  const handleCWPPToggle = (title: string) => {
    const updatedCWPP = CWPP.map((widget: any) =>
      widget.title === title ? { ...widget, visible: !widget.visible } : widget
    );
    setCWPP(updatedCWPP);
    localStorage.setItem("CWPP", JSON.stringify(updatedCWPP));
  };

  return (
    <div className="text-sm">
      <h2 className="font-medium py-2">CSPM</h2>
      <ul className="flex flex-col gap-1">
        {CSPM.map((widget: any) => (
          <li key={widget.title} className="items-top flex space-x-2">
            <Checkbox
              id={widget.title}
              checked={widget.visible}
              onClick={() => handleCSPMToggle(widget.title)}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor={widget.title}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {widget.title}
              </label>
            </div>
          </li>
        ))}
      </ul>
      <Separator className="my-4" />
      <h2 className="font-medium pb-2">CWPP</h2>
      <ul className="flex flex-col gap-1">
        {CWPP.map((widget: any) => (
          <li key={widget.title} className="items-top flex space-x-2">
            <Checkbox
              id={widget.title}
              checked={widget.visible}
              onClick={() => handleCWPPToggle(widget.title)}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor={widget.title}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {widget.title}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SheetForm;
