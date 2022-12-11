export const getFilter = state => state.persistedReducer.filter;

export const getContacts = state => {
  const normalizedFilter = getFilter(state).toLowerCase();

  const visibleContacts = state.persistedReducer.contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
  return visibleContacts;
};
