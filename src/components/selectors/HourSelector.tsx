import '../../searchForm.css';

const HourSelector = () => {
  const pickHour = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, '0')
  );
  return (
    <div className="hourSection">
      <div className="flex items-center gap-2 ">
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_11_21)">
            <path
              d="M24.75 6.875H8.25C6.73122 6.875 5.5 8.10622 5.5 9.625V26.125C5.5 27.6438 6.73122 28.875 8.25 28.875H24.75C26.2688 28.875 27.5 27.6438 27.5 26.125V9.625C27.5 8.10622 26.2688 6.875 24.75 6.875Z"
              stroke="#0D1C52"
              stroke-width="2.0625"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 4.125V9.625"
              stroke="#0D1C52"
              stroke-width="2.0625"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11 4.125V9.625"
              stroke="#0D1C52"
              stroke-width="2.0625"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.5 15.125H27.5"
              stroke="#0D1C52"
              stroke-width="2.0625"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.125 20.625H16.5"
              stroke="#0D1C52"
              stroke-width="2.0625"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.5 20.625V24.75"
              stroke="#0D1C52"
              stroke-width="2.0625"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_11_21">
              <rect width="33" height="33" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <select>
          {pickHour.map((hour, index) => (
            <option value={hour}>{hour}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default HourSelector;
