import { Input } from "@/components/ui/input";
import AppTitleText from "../app/title-text";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const TechnicalDetails = () => {
  return (
    <div className="space-y-4">
      <AppTitleText
        title="Technical details"
        subTitle="Some prospective guests like to know this kind of information. It also helps us more accurately estimate the ecological footprint of your itineraries."
      />

      <div>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <AppTitleText
              smallTitle="Comfort category"
              subTitle="The comfort level your ship offers"
            />
          </div>

          <div className="w-[216px]">
            <Select defaultValue="apple">
              <SelectTrigger>
                <SelectValue placeholder="Select " />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>Select Capacity</SelectLabel> */}
                  <SelectItem value="apple">Classic</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <AppTitleText
              smallTitle="Hull type"
              subTitle="Monohull or catamaran"
            />
          </div>

          <div className="w-[216px]">
            <Select defaultValue="apple">
              <SelectTrigger>
                <SelectValue placeholder="Select " />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>Select Capacity</SelectLabel> */}
                  <SelectItem value="apple">Motor sailboat</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator className="my-4" />
        <div>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <AppTitleText
                smallTitle="Propulsion type"
                subTitle="Monohull or catamaran"
              />
            </div>

            <div className="w-[216px]">
              <Select defaultValue="apple">
                <SelectTrigger>
                  <SelectValue placeholder="Select " />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {/* <SelectLabel>Select Capacity</SelectLabel> */}
                    <SelectItem value="apple">Motor sailboat</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex mt-2">
            <label
              htmlFor="sails"
              className="text-[#171717] bg-white border border-[#CDCDCD] rounded-md py-2 px-3 text-base font-medium flex items-center gap-2 cursor-pointer"
            >
              <Checkbox id="sails" />
              <span>Ship occasionally raises sails</span>
            </label>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <AppTitleText
              smallTitle="Cruising speed"
              subTitle="Average speed at which the sailboat navigates"
            />
          </div>

          <div className="w-[216px]">
            <Select defaultValue="apple">
              <SelectTrigger>
                <SelectValue placeholder="Select " />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>Select Capacity</SelectLabel> */}
                  <SelectItem value="apple">8.5kt</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <AppTitleText
              smallTitle="Length"
              subTitle="Ship length from bow to stern"
            />
          </div>

          <div className="w-[216px]">
            <Select defaultValue="apple">
              <SelectTrigger>
                <SelectValue placeholder="Select " />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>Select Capacity</SelectLabel> */}
                  <SelectItem value="apple">78ft</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <AppTitleText smallTitle="Beam" subTitle="Ship width" />
          </div>

          <div className="w-[216px]">
            <Select defaultValue="apple">
              <SelectTrigger>
                <SelectValue placeholder="Select " />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>Select Capacity</SelectLabel> */}
                  <SelectItem value="apple">18ft</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalDetails;
