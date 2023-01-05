import { Friend, Online, Offline, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      <span>{isOnline ? <Online /> : <Offline />}</span>
      <img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Friend>
  );
};

/* <li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li>; */