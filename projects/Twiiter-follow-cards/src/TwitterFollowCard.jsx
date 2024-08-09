import { useState } from "react";
import PropTypes from "prop-types";
import "./TwitterFollowCard.css";

export function TwitterFollowCard({ userName = 'unknown', formatUsername, name, isFollowing, urlImage }) {

  const [follow, setFollow] = useState(()=> {
    const followStorage = JSON.parse(window.localStorage.getItem(`follow_${userName}`));
    return followStorage ? followStorage : isFollowing
  });

  function handleFollow() {
    const newFollowState  = !follow;
    setFollow(newFollowState);
    window.localStorage.setItem(`follow_${userName}`, JSON.stringify(newFollowState));
  }

  function handleImage() {
    window.open(urlImage, "_blank");
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          src={urlImage}
          alt="user"
          id="image"
          className="tw-followCard-header-avatar"
          onClick={handleImage}
        />
        <div className="tw-followCard-header-info">
          <strong>{name}</strong>
          <span className="tw-followCard-header-info-user">{formatUsername(userName)}</span>
        </div>
      </header>
      <aside className="tw-followCard-aside">
        <button
          className={`tw-followCard-aside-buttonFollow ${
            follow ? "followTrue" : ""
          }`}
          onClick={handleFollow}
        >
          {follow ? "Unfollow" : "Follow"}
        </button>
      </aside>
    </article>
  );
}

TwitterFollowCard.propTypes = {
  userName: PropTypes.string.isRequired,
  formatUsername: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  urlImage: PropTypes.string.isRequired,
};
