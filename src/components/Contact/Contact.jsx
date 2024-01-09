import React from 'react'

const Contact = () => {
  return (
    <div>
        <form action="https://formsubmit.co/d0c9b0464fedac7ea30b570f8317c389" method="POST">
        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <button type="submit">Send</button>
        </form>
    </div>
  )
}

export default Contact;