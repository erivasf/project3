import React, {useContext} from 'react'
// import {CSSTransition, TransitionGroup} from 'react-app-transition-group'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem'


const Contacts = () => {
  const contactContext = useContext(ContactContext)
  const {contacts, filtered} = contactContext

  if(contacts.length === 0){
    return <h4>Here you can add your contacts</h4>
  }

  return (
    <div>
      {filtered !== null ? filtered.map(contact => (<ContactItem key={contact.id} contact={contact}></ContactItem>)):contacts.map(contact => (<ContactItem key={contact.id} contact={contact}></ContactItem>))}
    </div>
  )
}

export default Contacts
