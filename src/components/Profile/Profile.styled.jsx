import styled from '@emotion/styled';

export const ProfileCard = styled.div` 
margin: 40px auto;
width: 390px;
display: flex;
flex-direction: column;
align-items: center;
background-color: var(--bg);
border-radius: 10px;
box-shadow: var(--main-shadow);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: var(--primary);
`;

export const Avatar = styled.img`
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 150px;
  border: 3px solid #e9eef3;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-bottom: 7px;
  font-size: 28px;
  font-weight: 700;
  color: var(--accent);
  text-shadow: var(--main-shadow);
`;

export const Tag = styled.p`
  margin-bottom: 7px;
  font-size: 18px;
  text-shadow: var(--main-shadow);
`;

export const Location = styled.p`
  font-size: 18px;
  text-shadow: var(--main-shadow);
`;

export const StatsList = styled.ul`
margin: 0;
padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  border-top: 1px solid #dddddd;
  background-color: #e9eef3;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border-right: 1px solid #dddddd;

  :last-child {
  border-right: none;}
`;

export const Label = styled.span`
  font-size: 12px;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
