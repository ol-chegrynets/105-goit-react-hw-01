// import React from 'react';
import css from './Profile.module.css';

const Profile = ({ name, tag, Location, image, stats }) => {
  return (
    <section>
      <h1>Home Work</h1>
      <h2>Task First</h2>
      <div className={css.first}>
        <div className={css.info}>
          <img className={css.avatar} src={image} alt={name} />
          <p className={css.name}>{name}</p>
          <p className={css.text}>@{tag}</p>
          <p className={css.text}>{Location}</p>
        </div>

        <ul className={css.statsCont}>
          <li className={css.statsContItem}>
            <span>Followers</span>
            <span className={css.StatsText}>{stats.followers}</span>
          </li>
          <li className={css.statsContItem}>
            <span>Views</span>
            <span className={css.StatsText}>{stats.views}</span>
          </li>
          <li className={css.statsContItem}>
            <span>Likes</span>
            <span className={css.StatsText}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Profile;
