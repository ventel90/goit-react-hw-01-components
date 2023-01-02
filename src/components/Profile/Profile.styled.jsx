import styled from '@emotion/styled';

export const ProfileCard = styled.div` margin: 40px auto;
padding: 20px;
width: 350px;
display: flex;
flex-direction: column;
align-items: center;
background-color: var(--bg);
border-radius: 10px;
box-shadow: var(--main-shadow);
`;

export const Description = styled.div`
  margin-bottom: 25px;
  text-align: center;
  color: var(--secondary);
`;

export const Avatar = styled.img`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
  width: 150px;
  display: block;
  border-radius: 50%;
  box-shadow: var(--inset-shadow);
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

// export const  = styled.`
    
// `;

// export const  = styled.`
    
// `;
