import styled from 'styled-components'

export const HeroInfo = styled.div`
   h2{
      line-height: 80px;
      color: #313131;

      @media screen and (max-width:1920px){
         line-height: 60px;
      }

      @media screen and (max-width:1024px){
         line-height: 45px;
      }

      @media screen and (max-width:768px){
         line-height: 45px;
         margin-bottom: 5px;
      }
   }
   p{
      line-height:30px;

      @media screen and (max-width:1024px){
         line-height: 25px;
      }

      @media screen and (max-width: 640px){
         line-height: 22px;
      } 
   }

   button{
      background: #257C16;
      border-radius: 8px;
      color: #FFFFFF;
      font-weight: 500;
      padding: 15px 20px;
      font-size: 20px;

      @media screen and (max-width: 1920px){
         font-size: 18px;
      }

      @media screen and (max-width: 768px){
         font-size: 16px;
         padding: 10px 15px;
      }

      @media screen and (max-width: 768px){
         font-size: 14px;
         padding: 8px 12px;
         font-weight: 400;
         letter-spacing: .5px;
      }

   }
`