import AppTitleText from "../app/title-text";

const UploadImage: React.FC<{ size?: string }> = ({ size = 1 }) => {
  return (
    <div className="flex flex-col items-center bg-[#F9F9F9] px-4 py-6 rounded-md gap-1">
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_1479)">
            <path
              d="M8.7498 7.75C7.92136 7.75 7.2498 8.42156 7.2498 9.25C7.2498 10.0784 7.92136 10.75 8.7498 10.75C9.57823 10.75 10.2498 10.0784 10.2498 9.25C10.2498 8.42156 9.57792 7.75 8.7498 7.75ZM17.9717 5H5.97167C4.89511 5 3.99951 5.89531 3.99951 7V17C3.99951 18.1047 4.89482 19 5.97139 19H17.9714C19.0761 19 19.9714 18.1047 19.9714 17V7C19.9717 5.89531 19.1029 5 17.9717 5ZM18.4717 16.7906L14.1967 10.9812C14.1185 10.8375 13.9404 10.75 13.7498 10.75C13.5588 10.75 13.3804 10.8365 13.2745 10.9806L9.94323 15.4837L8.78417 14.0431C8.67664 13.9094 8.50498 13.8303 8.32261 13.8303C8.14005 13.8303 7.96855 13.9093 7.86073 14.0431L5.50073 16.9747C5.50073 16.9737 5.50073 16.9756 5.50073 16.9747L5.49948 7C5.49948 6.72431 5.7238 6.5 5.99948 6.5H17.9995C18.2752 6.5 18.4995 6.72431 18.4995 7V16.7906H18.4717Z"
              fill="#9B9B9B"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_1479">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(4 4)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <p className="font-medium tracking-[0.001%] text-[#424242]">
        Drag and drop photo to upload
      </p>
      <p className="text-[#9B9B9B] text-xs font-medium">{size}MB size limit</p>
      <div className="mt-1.5">
        <button className="text-[#171717] bg-white border border-[#CDCDCD] rounded-md py-2 px-3 text-base font-medium">
          Choose file
        </button>
      </div>
    </div>
  );
};

const Photos = () => {
  return (
    <div className="space-y-4">
      <AppTitleText
        title="Photos"
        subTitle="Add at least 5 photos of your ship. Be sure to include shots of the outside and public areas. "
      />

      <div className="space-y-2">
        <AppTitleText
          smallTitle="Cover photo"
          subTitle="Tip: use the most beautiful photo of the interior of your ship, not an aerial shot or the exterior. Make sure the photo highlights your ship’s finest qualities."
        />

        <UploadImage />
      </div>

      <div className="space-y-2">
        <AppTitleText smallTitle="More photos" />
        <UploadImage size="2" />
      </div>
    </div>
  );
};

export default Photos;
