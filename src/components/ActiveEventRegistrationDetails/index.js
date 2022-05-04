import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props

  const renderYetToRegisterView = () => (
    <div className="yet-to-register-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-view-img"
      />
      <p className="register-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-here-button">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="register-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationsClosedView = () => (
    <div className="registration-closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderNoActiveView = () => (
    <p className="no-active-event-description">
      Click on an event, to view its registration details
    </p>
  )

  const renderActiveRegistrationDetails = () => {
    switch (registrationStatus) {
      case 'YET_TO_REGISTER':
        return renderYetToRegisterView()
      case 'REGISTERED':
        return renderRegisteredView()
      case 'REGISTRATIONS_CLOSED':
        return renderRegistrationsClosedView()

      default:
        return renderNoActiveView()
    }
  }

  return (
    <div className="event-registration-details-container">
      {renderActiveRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
