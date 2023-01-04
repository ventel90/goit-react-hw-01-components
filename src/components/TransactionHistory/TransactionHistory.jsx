import PropTypes from 'prop-types';
import {
  Transactions,
  TrHeader,
  TrHeaderRow,
  TrHeaderRowTitle,
  TrBody,
  TrBodyRow,
  TrBodyRowValue,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Transactions>
      <TrHeader>
        <TrHeaderRow>
          <TrHeaderRowTitle>Type</TrHeaderRowTitle>
          <TrHeaderRowTitle>Amount</TrHeaderRowTitle>
          <TrHeaderRowTitle>Currency</TrHeaderRowTitle>
        </TrHeaderRow>
      </TrHeader>

      <TrBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TrBodyRow key={id}>
              <TrBodyRowValue>{type}</TrBodyRowValue>
              <TrBodyRowValue>{amount}</TrBodyRowValue>
              <TrBodyRowValue>{currency}</TrBodyRowValue>
            </TrBodyRow>
          );
        })}
      </TrBody>
    </Transactions>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};