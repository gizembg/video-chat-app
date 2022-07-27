import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import { Provider } from 'react-redux';
import { store } from '../app/store';

test('renders learn react link', () => {
    const {queryByLabelText, getByLabelText} = render(

        <Provider store={store}>
        <Footer callUser={false} leaveCall={true} />,
      </Provider>
      );
      expect(queryByLabelText(/off/i)).toBeTruthy();

    // expect(getByText(/name/i)).toBeInTheDocument();
});
  