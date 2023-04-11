/* eslint-disable react/jsx-no-undef */
import { Divider, List, ListItem } from '@mui/material';
import { useEffect, useState } from 'react';
import { getUsers } from '../services/axiosApi';
import Cards from './Cards';


export function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(10).then(users => setUsers(users));
  }, []);


  const loading = <span>Loading</span>

  return (
    <div>
      <List>
        {!users? loading: users.map((user, index) => (
          <ListItem key={index}>
          <Cards userData={user} />
          <Divider />
          </ListItem>
        )) 
        }
      </List>
 
    </div>
  );
}

