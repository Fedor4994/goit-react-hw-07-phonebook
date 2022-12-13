import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

import ContactForm from './ContactForm/ContactForm';
import Section from './Section/Section';
import Contacts from './Contacts/Contacts';
import Filter from './FIlter/Filter';

import { useGetContactsQuery } from 'redux/contactsApi';

export const App = () => {
  const { data, error, isLoading } = useGetContactsQuery();

  return (
    <div
      style={{
        height: '100%',
        padding: 10,
      }}
    >
      <Section title={'Phonebook'}>
        <ContactForm contacts={data} />
      </Section>

      <Section title={'Contacts'}>
        <Filter />
        {isLoading && !error ? (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#aaa"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : (
          <Contacts contacts={data} />
        )}
      </Section>
    </div>
  );
};
