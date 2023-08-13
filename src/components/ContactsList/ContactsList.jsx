import {
  ContactsListBtn,
  ContactsListItem,
  ContactsListItems,
} from './ContactsList.styled';

export const ContactsList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <ContactsListItems>
      {filteredContacts.map(contact => (
        <ContactsListItem key={contact.id}>
          {contact.name}: {contact.number}
          <ContactsListBtn onClick={() => onDeleteContact(contact.id)}>
            Delete
          </ContactsListBtn>
        </ContactsListItem>
      ))}
    </ContactsListItems>
  );
};
