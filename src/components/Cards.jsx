import { Avatar, Button, Card, CardContent, Divider, Typography } from '@mui/material';
import React, { useState } from 'react';


export default function Cards(props){
  const [view, setView] = useState('false');
  const { userData } = props;
  const { name, location, login, dob} = userData;
  const fullName = `${name.title} ${name.first} ${name.last}`;
  return (
    <Card
      sx={{ width: 470, mt: 8, ml: 5, mr: 15, bgcolor: '#6b537789' }}
      spacing={1}
      variant='outlined'
      // align='center'

      id='user'
    >
      <CardContent>
        <div>
          <Avatar
            sx={{
              width: 150,
              height: 150,
              marginLeft: 18,
              // marginRight: 5,
              border: 2.3,
              borderColor: '#43215487',
              alignItems: 'center'
            }}
            src={userData.picture.large}
          />
        </div>
        <div>
          <Typography
            color={'#2d2d2d'}
            variant='subtitle1'
            mt={2}
            ml={6}
          >{`Name: ${fullName}`}</Typography>
          <Typography color={'#2d2d2d'} mb={2} ml={6} variant='subtitle1'>
            {`Email: ${userData.email}`}
          </Typography>
        </div>
        <Button
          sx={{
            alignSelf: 'center',
            // maxWidth: 'fit-content',
            mb: 2,
            ml: 6,
            border: 2,
            width: 350,
            height: 45
          }}
          // alignSelf='center'
          color='secondary'
          variant='outlined'
          id='btn-view-info'
          onClick={() => setView(!view)}
        >
          {view ? 'View More' : 'Hide'}
        </Button>
        {!view && (
          <div id=''>
            <Divider />
            <div id=''>
              <Typography color={'#2d2d2d'} mt={2} variant='h5'>
                Location
              </Typography>
              <Typography
                color={'#2d2d2d'}
                variant='subtitle2'
              >{`Street: ${location.street.name}, ${location.street.number}`}</Typography>
              <Typography
                color={'#2d2d2d'}
                variant='subtitle2'
              >{`City: ${location.city}`}</Typography>
              <Typography
                color={'#2d2d2d'}
                variant='subtitle2'
              >{`State: ${location.state}`}</Typography>
              <Typography
                color={'#2d2d2d'}
                variant='subtitle2'
              >{`Country: ${location.country}`}</Typography>
              <Typography
                color={'#2d2d2d'}
                mb={2}
                variant='subtitle2'
              >{`PostCode: ${location.postcode}`}</Typography>
            </div>
            <Divider />
            <div id=''>
              <Typography color={'#2d2d2d'} mt={2} variant='h5'>
                Login
              </Typography>
              <Typography
                color={'#2d2d2d'}
                variant='subtitle2'
              >{`Username: ${login.username}`}</Typography>
              <Typography
                color={'#2d2d2d'}
                mb={2}
                variant='subtitle2'
              >{`User ID: ${login.uuid}`}</Typography>
            </div>
            <Divider />
            <div id=''>
              <Typography color={'#2d2d2d'} mt={2} variant='h5'>
                Personal Informations
              </Typography>
              <Typography
                color={'#2d2d2d'}
                variant='subtitle2'
              >{`Birth date: ${dob.date}`}</Typography>
              <Typography
                color={'#2d2d2d'}
                variant='subtitle2'
              >{`Age: ${dob.age}`}</Typography>
              <Typography
                color={'#2d2d2d'}
                variant='subtitle2'
              >{`Phone: ${userData.phone}`}</Typography>
              <Typography
                color={'#2d2d2d'}
                variant='subtitle2'
              >{`Cell: ${userData.cell}`}</Typography>
              <Typography
                color={'#2d2d2d'}
                variant='subtitle2'
              >{`Gender: ${userData.gender}`}</Typography>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
