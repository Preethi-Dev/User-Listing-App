import React, { useEffect, useState } from 'react'
import { UserList } from '../users.modal';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


const DisplayUsers = (): JSX.Element => {
  const [userList, setUserList] = useState<UserList>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try{
      const response = await fetch("/users.json");
      if(response.ok){
        const data = await response.json();    
        setUserList(data);
      }

      }catch(err){
        console.error("Error fetching data:", err);
      }   
    }

    fetchUsers()
  }, [])

  return (
   <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Username</TableCell>
          <TableCell>FirstName</TableCell>
          <TableCell>LastName</TableCell>
          <TableCell>Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          userList.map((user) => 
          <TableRow key={user.id}>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.firstName}</TableCell>
            <TableCell>{user.lastName}</TableCell>
            <TableCell>{user.email}</TableCell>
          </TableRow>)
        }
      </TableBody>
    </Table>
   </TableContainer>
  )
}

export default DisplayUsers