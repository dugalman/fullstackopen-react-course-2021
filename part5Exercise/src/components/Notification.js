const Notification = ({ message, type }) => {
  
  if (message === null) return null
  if (type !== 'error' && type !== 'success') return null

  return (
    <div className={type}>
      {message}
    </div>
  )
}

export default Notification