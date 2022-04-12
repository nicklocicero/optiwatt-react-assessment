export const Header = (props) => {
  return (
    <header className="Header">
      <h3>{props.subheading}</h3>
      {props.mainHeader}
      <p>{props.description}</p>
    </header>
  )
}

export const FeatureCard = (props) => {
  return (
    <div className={'Card Card' + (props.index + 1)}>
      <img src={props.icon} alt={props.logoAlt} />
      <h4>{props.heading}</h4>
      <p>{props.body}</p>
    </div>
  )
}

export const CTAButton = (props) => {
  return (
    <div className="Button">
      <button>Register your Tesla</button>
    </div>
  )
}

export default {
  Header,
  FeatureCard,
  CTAButton
}