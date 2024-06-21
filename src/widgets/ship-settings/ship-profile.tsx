import { Input } from "@/components/ui/input";
import AppTitleText from "../app/title-text";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const ShipProfile = () => {
  return (
    <div className="space-y-4">
      <AppTitleText
        title="Ship profile"
        subTitle="Set up your ship’s public facing profile. "
      />

      <div>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <AppTitleText
              smallTitle="Name"
              subTitle="The name by which passengers will identify your ship."
            />
          </div>

          <div className="w-[216px]">
            <Input defaultValue="Samba" />
          </div>
        </div>

        <Separator className="my-4" />
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <AppTitleText
              smallTitle="Passenger capacity"
              subTitle="The amount of guests your ship can fit. Does not include crew."
            />
          </div>

          <div className="w-[216px]">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select " />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>Select Capacity</SelectLabel> */}
                  <SelectItem value="apple">16 Passengers</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="space-y-2">
          <div>
            <AppTitleText
              smallTitle="Description"
              subTitle="Introduce your ship to prospective travelers."
            />
          </div>

          <div className="flex">
            <Textarea placeholder="The Nemo III is a true sailing catamaran owned and operated by a family business who have been sailing the Galápagos waters since 1985. This is a perfect way to see the islands in a vessel purpose-made for stable, fast journeys under sail or engine." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipProfile;
