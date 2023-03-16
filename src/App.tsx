import './App.css';
import AgeSection from './components/AgeSection';
import CarDeliveryLocation from './components/CarDeliveryLocation';
import DeliveryDateSection from './components/DeliveryDateSection';
import FormTitle from './components/FormTitle';
import LocationInputField from './components/LocationInputField';
import SearchButton from './components/button/SearchButton';
import Benefits from './components/Benefits';

function App() {
  const BenefitsText = [
    'No credit card fees',
    'No change fees',
    'Price match guarantee',
  ];

  return (
    <div className="App">
      <div>
        <div className="yellowRectangle"></div>
        <div className="orangeRectangle"></div>
        <div className="searchForm">
          <FormTitle text="Search for a renter car" />
          <LocationInputField text="Pick up location" />
          <CarDeliveryLocation />
          <DeliveryDateSection />
          <AgeSection />
          <div>
            {BenefitsText.map((benefit, index) => (
              <Benefits text={benefit} />
            ))}
          </div>
          <SearchButton text="Search" />
        </div>
      </div>
    </div>
  );
}

export default App;
