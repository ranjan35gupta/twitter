import React, { useState } from 'react';
import FollowButton from '../../../../Atoms/FollowButton/FollowButton'
import RightBotStyle from "./Follow.module.css";


const userList = [
  {
    id: 1,
    tag: <i className="far fa-solid fa-badge-check"></i>,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Dz0hVXb8Bc7IM6SpzZkEf6VfFsriOu9oPg&usqp=CAU",
    text: "Sky",
    text2: "sky@gmail.com",
  },
  {
    id: 2,
    tag: <i className="fa fa-solid fa-badge-check"></i>,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_NQ6CH3GSZZziyy9UcvVGlhxP8XSptflRwQ&usqp=CAU",
    text: "Malvika",
    text2: "malvika@gmail.com",
  },
  {
    id: 3,
    tag: <i className="fa fa-solid fa-badge-check"></i>,
    src: "https://pbs.twimg.com/profile_images/1565187838303383553/GhjYyIsG_400x400.jpg",
    text: "Akshay",
    text2: "akshay@gmail.com",
  },
  {
    id: 4,
    tag: <i class="fa fa-solid fa-badge-check"></i>,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj_oz7crwHtUQj0jJuvLq-ILk5oikP_3FFL-mDJqk&s",
    text: "mahi",
    text2: "virat@gmail.com",
  },
  {
    id: 5,
    tag: <i class="fa fa-solid fa-badge-check"></i>,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj_oz7crwHtUQj0jJuvLq-ILk5oikP_3FFL-mDJqk&s",
    text: "virat",
    text2: "virat@gmail.com",
  },
];

export default function Follow() {
  const [users, setUsers] = useState(userList);
  const [showAll, setShowAll] = useState(false);

  function handleFollowToggle(id) {
    setUsers(prevUsers => {
      return prevUsers.map(user => {
        if (user.id === id) {
          return { ...user, isFollowing: !user.isFollowing };
        }
        return user;
      });
    });
  }

  function handleShowMore() {
    setShowAll(prevState => !prevState);
  }

  const displayedUsers = showAll ? users : users.slice(0, 3);

  return (
    <>
      {users.length ? (
        <div className={RightBotStyle.box}>
          <h3 style={{ paddingLeft: "1rem" }}>Who to follow</h3>
          {displayedUsers.map(user => (
            <div className={RightBotStyle.contentmain} key={user.id}>
              <img
                style={{ borderRadius: "50%" }}
                src={user.src}
                width="50rem"
                height="50rem"
                alt="pp"
              />
              <div className={RightBotStyle.content}>
                <div className={RightBotStyle.name}>
                  <span className={RightBotStyle.upText}>{user.text}</span>
                  <span className={RightBotStyle.content1}>{user.text2}</span>
                </div>
              </div>
              <span className={RightBotStyle.poperParent}>
                <FollowButton
                  className={RightBotStyle.followButton}
                  isFollowing={user.isFollowing}
                  onToggle={() => handleFollowToggle(user.id)}
                />
              </span>
            </div>
          ))}
          <h4 onClick={handleShowMore} className={RightBotStyle.ShowMore}>
            {showAll ? "Show less" : "Show More"}
          </h4>
        </div>
      ) : null}
    </>
  );
}
