import PropTypes from 'prop-types';
import { removeContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { Item, Text, Btn } from './ContactList.styled';
import { BsFillPersonXFill } from 'react-icons/bs';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(removeContact(contactId));
  };
  return (
    <Item>
      <Text>
        {contact.name}: <span> {contact.phone}</span>
      </Text>
      <Btn type="button" onClick={() => handleDelete(contact.id)}>
        <BsFillPersonXFill />
      </Btn>
    </Item>
  );
};
ContactListItem.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
