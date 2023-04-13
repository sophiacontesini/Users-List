/* eslint-disable react/jsx-no-undef */
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import getUsers from '../services/fetchApi';
import Cards from './Cards';


export function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(10).then(users => setUsers(users));
  }, []);


  const loading = <span>Loading</span>

  return (
    <div>
      <Grid container>
        {!users
          ? loading
          : users.map((user, index) => (
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
            ))}
      </Grid>
    </div>
  );
}

