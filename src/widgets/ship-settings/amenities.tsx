import { PersonIcon } from "@radix-ui/react-icons";
import AppTitleText from "../app/title-text";

const amenties = [
  {
    name: "Wi-Fi",
    details: "Available throughout the duration of the trip",
  },
  {
    name: "Outdoor dining",
    details: "Seating is available for outdoor dining, covered or not",
  },
  {
    name: "Hot tub",
    details: "Seating is available for outdoor dining, covered or not",
  },
  {
    name: "Exercise machines",
    details: "Dedicated equipment/facility for daily exercise",
  },
  {
    name: "Kayaks",
    details: "Kayaks available for all guests when appropriate",
  },
  {
    name: "Paddle boards",
    details: "Paddle boards available for all guests when appropriate",
  },
  {
    name: "Scuba diving",
    details: "When possible, scuba diving is made available",
  },
  {
    name: "Glass bottom",
    details: "Guests can see underwater from the floor",
  },
  {
    name: "Solo cabins",
    details: "Guests can book a cabin to themselves for the price of one",
  },
  {
    name: "Tall guest friendly",
    details: "Interior is spacious, beds are longer or have no headboards",
  },
  {
    name: "Wheelchair friendly",
    details: "Cabins near the dining/social area, stairway not required",
  },
  {
    name: "Medical support",
    details: "Qualified medical professional onboard at all times",
  },
];

const Amenities = () => {
  return (
    <div className="space-y-4">
      <AppTitleText
        title="Public amenities and features"
        subTitle="Some prospective guests like to know this kind of information."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {amenties.map(({ name, details }, index) => (
          <div
            key={`amenity-${index}`}
            className="border border-[#CDCDCD] text-center flex flex-col items-center rounded-md p-4 hover:bg-[#CDCDCD]/10 hover:border-[#9B9B9B]"
          >
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-[#ECECEC] mb-2">
              <PersonIcon />
            </div>
            <AppTitleText smallTitle={name} subTitle={details} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
