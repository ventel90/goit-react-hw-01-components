import styled from '@emotion/styled';

export const Transactions = styled.table`
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;
  width: 390px;
  background-color: var(--bg);
  box-shadow: var(--main-shadow);
  border-radius: 10px;
`;

export const TrHeader = styled.thead`
  margin-bottom: 20px;
  width: 100%;
  display: block;
  box-shadow: var(--main-shadow);
  border-radius: 10px;
`;

export const TrHeaderRow = styled.tr`
  padding: 15px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TrHeaderRowTitle = styled.th`
  font-weight: 700;
  font-size: 24px;
  color: var(--accent);
  text-align: left;
  text-shadow: var(--main-shadow);
`;

export const TrBody = styled.tbody`
  width: 100%;
  display: block;
`;

export const TrBodyRow = styled.tr`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--main-shadow);
  border-radius: 10px;
`;

export const TrBodyRowValue = styled.td`
  padding: 10px;
  flex-basis: 33.33%;
  font-weight: 500;
  color: var(--secondary);
  text-shadow: var(--main-shadow);
`;