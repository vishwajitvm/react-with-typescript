import React from 'react'
import Greet from './PropsComponent/Greet'
import Person from './PropsComponent/Person';
import PersonLists from './PropsComponent/PersonLists';

export default function ComponentImports() {
    const userLogStatus = true
    const user = "Shivani"
    const messageNumber = 21 ;
    //PERSON
    const personName = {
        first: "Vishwajit",
        last: "vm"
    }
    //PERSONSLIST
    const nameList = [
        {
            id: 1,
            first: "Vishwajit",
            last: "vm"
        },
        {
            id: 2,
            first: "Shivani",
            last: "Singh"
        },
        {
            id: 3,

            first: "Nidhi",
            last: "Singh"
        },
        {
            id: 4,
            first: "Nitish",
            last: "Singh"
        }
    ]

  return (
    <div>
      <Greet name={user} messageCount={messageNumber} isLoggedIn={userLogStatus} />
      <Person name={personName} />
      <PersonLists names={nameList} />
    </div>
  )
}
