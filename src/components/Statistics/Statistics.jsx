import PropTypes from 'prop-types';
import {
  Container,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export const Statistics = ({ title, stats}) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id} style={{ backgroundColor: randomHexColor() }}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </StatItem>
          );
        })}
      </StatList>
    </Container>
  );
};
  
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
