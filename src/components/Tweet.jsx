import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

function Tweet(props) {
  console.log(props.tweet);
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />
      <div className="body">
        <div className="top">
          <span className="user">
            <User
              name={props.tweet.user.name}
              handle={props.tweet.user.handle}
            />
          </span>
          <span className="timestamp">
            <Timestamp time={props.tweet.timestamp} />
          </span>
        </div>
        <p className="message">
          <Message message={props.tweet.message} />
        </p>
        <div className="actions">
          <Actions />
        </div>
      </div>
    </div>
  );
}

export default Tweet;
