import { Avatar, Button, Card, CardContent, Divider, Typography } from '@mui/material';
import React, { useState } from 'react';


export default function Cards(props){
  const [view, setView] = useState('false');
  const { userData } = props;
  const { name, location, login, dob} = userData;
  const fullName = `${name.title} ${name.first} ${name.last}`;
  return (
    <Card
      sx={{ width: 580, bgcolor: '#dcc6ed' }}
      variant='outlined'
      // align='center'

      id='user'
    >
      <CardContent>
        <div>
          <Avatar
            sx={{
              width: 100,
              height: 100,
              marginRight: 5,
              border: 3,
              borderColor: '#676267'
            }}
            src={userData.picture.large}
          />
        </div>
        <div>
          <Typography variant='subtitle1'>{`Name: ${fullName}`}</Typography>
          <Typography mb={2} variant='subtitle1'>
            {`Email: ${userData.email}`}
          </Typography>
        </div>
        <Button
          sx={{ alignSelf: 'end', maxWidth: 'fit-content', mb:2 }}
          color='secondary'
          variant='contained'
          id='btn-more-info'
          onClick={() => setView(!view)}
        >
          {view ? 'View More' : 'Hide'}
        </Button>
        {!view && (
          <div id=''>
            <Divider />
            <div id=''>
              <Typography mt={2} variant='h5'>
                Location
              </Typography>
              <Typography variant='subtitle2'>{`Street: ${location.street.name}, ${location.street.number}`}</Typography>
              <Typography variant='subtitle2'>{`City: ${location.city}`}</Typography>
              <Typography variant='subtitle2'>{`State: ${location.state}`}</Typography>
              <Typography variant='subtitle2'>{`Country: ${location.country}`}</Typography>
              <Typography
                mb={2}
                variant='subtitle2'
              >{`PostCode: ${location.postcode}`}</Typography>
            </div>
            <Divider />
            <div id=''>
              <Typography mt={2} variant='h5'>
                Login
              </Typography>
              <Typography variant='subtitle2'>{`Username: ${login.username}`}</Typography>
              <Typography
                mb={2}
                variant='subtitle2'
              >{`User ID: ${login.uuid}`}</Typography>
            </div>
            <Divider />
            <div id=''>
              <Typography mt={2} variant='h5'>
                Personal
              </Typography>
              <Typography variant='subtitle2'>{`Birth date: ${dob.date}`}</Typography>
              <Typography variant='subtitle2'>{`Age: ${dob.age}`}</Typography>
              <Typography variant='subtitle2'>{`Phone: ${userData.phone}`}</Typography>
              <Typography variant='subtitle2'>{`Cell: ${userData.cell}`}</Typography>
              <Typography variant='subtitle2'>{`Gender: ${userData.gender}`}</Typography>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
