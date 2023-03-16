import '../searchForm.css';
import DateTitle from './DateTitle';
import DateSelector from './selectors/DateSelector';
import HourSelector from './selectors/HourSelector';
import MinuteSelector from './selectors/MinuteSelector';

const DeliveryDateSection = () => {
  return (
    <div className="grid grid-cols-12 w-full">
      {/* left section */}
      <div className="col-span-6">
        <DateTitle text="Date of pickup" />
        <DateSelector />
        <div className="flex mt-2">
          <HourSelector />
          <MinuteSelector />
        </div>
      </div>

      {/* right section */}
      <div className="col-span-6">
        <DateTitle text="Date of delivery" />
        <DateSelector />
        <div className="flex mt-2">
          <HourSelector />
          <MinuteSelector />
        </div>
      </div>
    </div>
  );
};

export default DeliveryDateSection;
