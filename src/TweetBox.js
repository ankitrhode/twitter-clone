import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Ankit",
      username: "Ankit77372326",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4D03AQGq6ZGWsGhz0g/profile-displayphoto-shrink_400_400/0?e=1605744000&v=beta&t=lh_SfY9b46M0HjdfBltLOL2tUEl_ef1d3CYlEmlIT6E",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQGq6ZGWsGhz0g/profile-displayphoto-shrink_400_400/0?e=1605744000&v=beta&t=lh_SfY9b46M0HjdfBltLOL2tUEl_ef1d3CYlEmlIT6E" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
