import './css/App.css';
import { features } from './strings/featuresData';
import { Header, FeatureCard, CTAButton } from './components/components';

function App() {

  return (
    <div className="App">
      <Header className="Header"
        mainHeader={<h2>Here is more of what<br />it can do for you</h2>}
        subheading="Features"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit."
      />
      <div className="Cards">
        { 
          (() => {
            let featureContainer = [];
            features.forEach((feature, index) => {
              featureContainer.push(
                <FeatureCard
                  key={index + feature.featureTitle}
                  index={index}
                  icon={feature.icon}
                  heading={feature.featureTitle}
                  body={feature.body}
                  logoAlt={feature.featureTitle}
                />)
            });
            return featureContainer;
          })() 
        }
      </div>
      <CTAButton />
    </div>
  );
}

export default App;
