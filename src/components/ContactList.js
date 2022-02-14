import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
         console.log(props);
        
        const deleteContactHandler = (id) => {
            props.getContactId(id);
        }

        const renderContactList = props.contacts.map((contact) => (
             <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>
         ));
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactList;