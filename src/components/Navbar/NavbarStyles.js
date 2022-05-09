import styled from 'styled-components'

export const LogoWrapper = styled.div`
   height: 100%;
   width: 200px;
   overflow: hidden;
`
export const MobileMenu = styled.div`
   height: calc(100vh - 86px);
   z-index: 2;
   background-color: red;
`

export const WhiteBtn = styled.li`  
   text-align: center;
   border:2px solid #257C16;
   color: #257C16;
   padding: 10px 20px;
   border-radius: 10px;
   &:hover{
      background: #257C16;
      color: #fff;
      transition: .3s ease-in-out all;
   }
`

export const GreenBtn = styled.li`
   background: #257C16;
   padding: 10px 20px;
   border-radius: 10px;
   text-align: center;
   color: #fff;
`