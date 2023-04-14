import { render, screen, fireEvent, waitForElementToBeRemoved, findByText, queryByText, waitFor } from '@testing-library/react';
// import { Cards } from '../components/Cards';
import { Users } from '../components/Users';


const mockResponse = [
  {
    name: {
      first: 'John',
      last: 'Doe'
    },
    email: 'john.doe@example.com',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg'
    }
  },
  {
    name: {
      first: 'Jane',
      last: 'Doe'
    },
    email: 'jane.doe@example.com',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/75.jpg'
    }
  }
];

describe('Test Users Component', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  //verifica se a API está sendo chamada corretamente
  it('should call the api', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse)
      })
    );
    render(<Users />);
    expect(fetch).toBeCalled();
  });
});
