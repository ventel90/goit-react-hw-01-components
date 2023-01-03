import user from 'data/user.json';
// import data from 'data/data.json';
// import friends from 'data/friends.json';
// import transactions from 'data/transactions.json';

import { Profile } from './Profile/Profile';

export const App = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};
