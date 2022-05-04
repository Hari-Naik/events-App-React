import './index.css'

const EventItem = props => {
  const {
    eachEvent,
    onUpdateRegistrationStatus,
    onUpdateActiveId,
    isActive,
  } = props
  const {id, imageUrl, name, location, registrationStatus} = eachEvent

  const onClickEvent = e => {
    onUpdateRegistrationStatus(e.target.id)
    onUpdateActiveId(id)
  }

  const className = isActive && 'style'

  return (
    <li className="event-item" onClick={onClickEvent}>
      <button type="button" className="button">
        <img
          src={imageUrl}
          alt="event"
          className={`img ${className}`}
          id={registrationStatus}
        />
        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
