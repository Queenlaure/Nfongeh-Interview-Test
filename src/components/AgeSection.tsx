import '../searchForm.css';

const AgeSection = () => {
  return (
    <div className="">
      <div className="flex flex-row items-center justify-center ">
        <div>
          {' '}
          <input type="checkbox" name="The driver’s age between 30 and 65?" />
        </div>
        <div>
          <label
            className="ageLabel ml-2 "
          >
            The driver’s age between 30 and 65?
          </label>
        </div>
        <div>
          <svg
            width="23"
            height="23"
            viewBox="0 0 33 33"
            fill="none"
            className='ml-2'
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_11_94)">
              <path
                d="M16.5 28.875C23.3345 28.875 28.875 23.3345 28.875 16.5C28.875 9.66548 23.3345 4.125 16.5 4.125C9.66548 4.125 4.125 9.66548 4.125 16.5C4.125 23.3345 9.66548 28.875 16.5 28.875Z"
                stroke="#0D1C52"
                stroke-width="1.8125"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 11H16.5138"
                stroke="#0D1C52"
                stroke-width="1.8125"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.125 16.5H16.5V22H17.875"
                stroke="#0D1C52"
                stroke-width="1.8125"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_11_94">
                <rect width="33" height="33" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AgeSection;
