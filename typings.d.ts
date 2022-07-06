export interface Tweet extends TweetBody {
  id: string;
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
  text: string;
  username: string;
  profileImage: string;
  profileImage: string;
};

export interface Comment extends CommentBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: 'comment';
  tweet: {
    _ref: string;
    _type: 'reference';
  };
}
