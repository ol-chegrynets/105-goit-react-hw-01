// import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <section className="taskSecond">
      <h2 className="taskTitle">Task Second</h2>
      <ul className={css.friendTask}>
        {friends.map(friend => {
          return (
            <FriendListItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default FriendList;
