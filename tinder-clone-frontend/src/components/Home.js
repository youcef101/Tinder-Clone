import React from 'react'
import styled from 'styled-components'
import SwipeBtn from './SwipeBtn';
import { useEffect } from 'react';
import axiosinstance from '../axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectPeoples, setPeoples } from '../features/people/peopleSlice';
import TinderCard from 'react-tinder-card'

function Home() {
    const dispatch = useDispatch()
    const peoples = useSelector(selectPeoples)

    useEffect(() => {
        async function fetchData() {
            const req = await axiosinstance.get('/tinder/card');

            let tempPeople = req.data;
            dispatch(setPeoples(tempPeople));
        }

        fetchData();
    }, [dispatch])
    const onSwipe = (direction, nameToDelete) => {
        //console.log('removing: ' + nameToDelete)
    }

    const onCardLeftScreen = (myIdentifier) => {
        //console.log(myIdentifier + ' left the screen')
    }

    return (
        <Container>

            <CardPerson >

                {peoples &&
                    peoples.map((people) =>
                        <TinderCardContainer
                            key={Math.random()}
                            id="card"
                            onSwipe={(dir) => onSwipe(dir, people.name)}
                            key={people.name}
                            onCardLeftScreen={() => onCardLeftScreen(people.name)}
                            preventSwipe={['up', 'down']}>

                            <Content bgImg={people.imageUrl}>
                                <UserName>{people.name}</UserName>
                            </Content>

                        </TinderCardContainer>
                    )}
            </CardPerson>

            <SwipeBtn />
        </Container>
    )
}

export default Home
const Container = styled.div`
min-height:calc(100vh - 55px);
display:flex;
align-items:center;
justify-content:space-around;
flex-direction:column;
overflow-x:hidden

`
const CardPerson = styled.div`
display:flex;
align-items:center;
justify-content:center;
position:relative;
margin-top:160px;

`

const TinderCardContainer = styled(TinderCard)`
position:absolute;
cursor:pointer;
`
const Content = styled.div`
border-radius:20px;
display:flex;
padding:10px 20px;
align-items:flex-end;
background-image: ${props => `url("${props.bgImg}")`};
background-position:center;
background-repeat:no-repeat;
background-size:cover;
width:20vw;
height:60vh;
box-shadow:0px 18px 53px 0px rgba(0,0,0,0.3);
@media(max-width:1150px){
   width:25vw;
}

@media(max-width:1000px){
   width:30vw;
}
@media(max-width:850px){
   width:35vw;
}
@media(max-width:730px){
   width:40vw;
}
@media(max-width:590px){
   width:45vw;
}
@media(max-width:500px){
   width:50vw;
}
@media(max-width:425px){
   width:60vw;
}
@media(max-width:360px){
   width:75vw;
}
`
const UserName = styled.div`
color:white;
font-weight:500;

`


