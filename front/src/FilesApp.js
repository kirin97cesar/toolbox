import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { ViewMain } from './views/ViewMain';

export const FilesApp = () => {
  return (
    <Provider store={store}>
      <ViewMain title='React Test App'/>
    </Provider>
  );
};
