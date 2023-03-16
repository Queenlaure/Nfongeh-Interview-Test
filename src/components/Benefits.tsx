import '../searchForm.css';

interface BenefitsProps {
  text: string;
}

const Benefits = ({ text }: BenefitsProps) => {
  return (
    <div className="mb-2">
      <div className="flex flex-row items-center justify-center">
        <svg
          width="18"
          height="13"
          viewBox="0 0 18 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.68753 6.24997L6.37503 10.9375L15.75 1.56247"
            stroke="#0D1C52"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className='benefitTitle ml-3'>{text}</p>
      </div>   
    </div>
  );
};

export default Benefits;
