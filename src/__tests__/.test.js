import { render, screen, fireEvent, waitForElementToBeRemoved, findByText, queryByText } from '@testing-library/react';
// import { Cards } from '../components/Cards';
import { Users } from '../components/Users';
import getUsers from '../services/fetchApi';

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

  // it('should render users list', async () => {
  //   global.fetch = jest.fn(() =>
  //     Promise.resolve({
  //       json: () => Promise.resolve(mockResponse)
  //     })
  //   );
  //   render(<Users />);
  //   await waitForElementToBeRemoved(() => queryByText('Loading'), {
  //     timeout: 3000
  //   });
  //   const johnDoe = await screen.findByText(/John Doe/i);
  //   const janeDoe = await screen.findByText(/Jane Doe/i);
  //   expect(johnDoe).toBeInTheDocument();
  //   expect(janeDoe).toBeInTheDocument();
  // });

  // Verifica se o texto "Loading" é exibido antes requisição da API
  // it('should render correctly loading', async () => {
  //   global.fetch = jest.fn(() =>
  //     Promise.resolve({
  //       json: () => Promise.resolve(mockResponse)
  //     })
  //   );
  //   render(<Users />);
  //   const loadingText = screen.getByText(/Loading/i);
  //   expect(loadingText).toBeInTheDocument();
  // });
});


// describe('Test Cards Component', () => {
//   it('checks if the button toggles view on click', () => {
//     const userData = {
//       name: { title: 'Mr', first: 'John', last: 'Doe' },
//       location: {
//         street: { name: '123 Main St', number: 456 },
//         city: 'San Francisco',
//         state: 'CA',
//         country: 'USA',
//         postcode: '12345'
//       },
//       login: { username: 'johndoe', uuid: 'abc-123' },
//       dob: { date: '1990-01-01', age: 31 },
//       email: 'johndoe@example.com',
//       picture: { large: 'https://randomuser.me/api/portraits/men/1.jpg' },
//       phone: '123-456-7890',
//       cell: '123-456-7890',
//       gender: 'male'
//     };
//     render(<Cards userData={userData} />);

//     //Verifica se os dados são exibidos/ocultados conforme o click no botão
//     const infoButton = screen.getByRole('button', { name: 'View More' });
//     expect(infoButton).toBeInTheDocument();
//     fireEvent.click(infoButton);
//     expect(infoButton).toHaveTextContent('Hide');
//     fireEvent.click(infoButton);
//     expect(infoButton).toHaveTextContent('View More');
//   });
// });
