export const getFilter = state => state.filter;

export const getContacts = state => {
  const normalizedFilter = getFilter(state).toLowerCase();
  const visibleContacts = state.contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
  return visibleContacts;
};

export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
