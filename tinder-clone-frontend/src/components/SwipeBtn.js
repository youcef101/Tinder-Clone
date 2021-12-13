import React from 'react'
import styled from 'styled-components'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

function SwipeBtn() {
    return (
        <Container>
            <ActionContainer>
                <RefreshBtn>
                    <ReplayIcon />
                </RefreshBtn>
                <CloseBtn>
                    <CloseIcon />
                </CloseBtn>
                <StarBtn>
                    <StarIcon />
                </StarBtn>
                <LikeBtn>
                    <FavoriteIcon />
                </LikeBtn>
                <FlashBtn>
                    <FlashOnIcon />
                </FlashBtn>
            </ActionContainer>
        </Container>
    )
}

export default SwipeBtn
const Container = styled.div`
margin-top:60px;
`
const ActionContainer = styled.div`
display:flex;
align-items:center;
margin-left:-25px;
`
const RefreshBtn = styled.div`
margin-left:60px;
cursor:pointer;
background-color:#f2f2f2;
border-radius:50%;
color:orange;
width:50px;
height:50px;
display:flex;
align-items:center;
justify-content:center;
box-shadow:rgb(0 0 0 / 80% ) 20px 40px 58px -16px,
    rgb(0 0 0 / 72%)0px 30px 22px -10px;
`
const CloseBtn = styled(RefreshBtn)`
color:red;
`
const LikeBtn = styled(RefreshBtn)`
color:green;
`
const FlashBtn = styled(RefreshBtn)`
color:purple;
`
const StarBtn = styled(RefreshBtn)`
color:blue;
`
