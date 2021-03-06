import styled from 'styled-components';
import KakaoLoginBtn from '../reuse/molecules/atoms/KakaoLoginBtn'
import {AiFillFacebook} from 'react-icons/all'

const PageBox = styled.div`
  background: rgba(0, 0, 0, 0.75);
  width: 35vw;
  height: 45vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5vw 5vw;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 10vw;
`
const LoginTitleBox = styled.div`
  width: 100%;
  display: flex;
  margin-top: 3vw;
  margin-bottom: 2.5vw;
`
const LoginTitle = styled.div`
  font-size: 3vw;
  font-weight: 700;
`
const TextInputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const TextInput = styled.input`
  height: 4vw;
  border-radius: 7px;
  background: #333;
  border: none;
  margin-bottom: 16px;
  color: #fff;
  padding-left: 1.5vw;
  &:focus{
    outline: none;
  }
`
const CheckBox = styled.div`
  color: #b3b3b3;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  font-size: 1.1vw;
  align-items: center;
  
`
const CheckLeftBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`
const Check = styled.input`
  
`
const CheckLabel = styled.label`
`
const CheckText = styled.div`
`
const HelpText = styled.div`
`
const FaceBookLogin = styled.div`
  margin-top: 3vw;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  font-size: 1.1vw;
  color: #b3b3b3;
  & svg{
    font-size: 2vw;
  }
`
const FaceBookLoginText = styled.div`
`

const NetflixJoinBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin-top: 1vw;
  font-size: 1.2vw;
  color: #b3b3b3;
`
const NetflixJoinText = styled.div`
  
`
const NetflixJoinLink = styled.div`
  color: #fff;
  margin-left: .6vw;
`
const RobotTestBox = styled.div`
  width: 100%;
  
  margin-top: 1vw;
  font-size: 1.1vw;
  color: #b3b3b3;
`
const RobotText = styled.div`
  display: inline;
`
const RobotLink = styled.div`
  display: inline;
  color: #0071EB;
`
const LoginForm = () => {
  return (
    <PageBox>
      <LoginTitleBox>
        <LoginTitle>?????????</LoginTitle>
      </LoginTitleBox>
      <TextInputBox>
        <TextInput type={'email'} placeholder={'????????? ?????? ?????? ????????????'}/>
        <TextInput type={'password'} placeholder={'????????????'}/>
      </TextInputBox>
      <KakaoLoginBtn />
      <CheckBox>
        <CheckLeftBox>
          <Check type={'checkbox'} id={'checked'}/>
          <CheckLabel form={'checked'}/>
          <CheckText>????????? ?????? ??????</CheckText>
        </CheckLeftBox>
        <HelpText>????????? ???????????????????</HelpText>
      </CheckBox>
      <FaceBookLogin>
        <AiFillFacebook />
        <FaceBookLoginText>Facebook?????? ?????????</FaceBookLoginText>
      </FaceBookLogin>
      <NetflixJoinBox>
        <NetflixJoinText>Netflix ????????? ?????????????</NetflixJoinText>
        <NetflixJoinLink>?????? ???????????????.</NetflixJoinLink>
      </NetflixJoinBox>
      <RobotTestBox>
        <RobotText>??? ???????????? Google reCAPTCHA??? ????????? ?????? ???????????? ????????? ????????? ???????????????.<RobotLink>????????? ????????????</RobotLink></RobotText>
      </RobotTestBox>
    </PageBox>
  )
}

export default LoginForm;
