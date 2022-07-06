export interface Tweet extends TweetBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: 'tweet';
  blockTweet: boolean;
}
export type TweetBody = {
  text: string;
  username: string;
  profileImage: string;
  image?: string;
};

export type CommentBody = {
  tweetId: string;
  comment: string;
  username: string;

  profileImg: string;
};

export interface Comment extends CommentBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: 'comment';
  comment: string;
  tweet: {
    _ref: string;
    _type: 'reference';
  };
}
