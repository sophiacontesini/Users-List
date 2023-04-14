/* eslint-disable react/jsx-no-undef */
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { act } from 'react-dom/test-utils';
import getUsers from '../services/fetchApi';
import Cards from './Cards';


export function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
   setIsLoading(true);
   getUsers(12).then(users => {
     act(() => {
       setUsers(users);
       setIsLoading(false);
     });
   });
 }, []);

  return (
    <div>
      {isLoading
        ? <span>Loading users...</span>
        : <Grid container alignItems='center'>
            {users?.length > 0
              ? users.map((user, index) => (
                  <Grid
                    item
                    alignItems='center'
                    key={index}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                  >
                    <Cards userData={user} />
                  </Grid>
                ))
              : <span>No users found.</span>}
          </Grid>}
    </div>
  );
}

