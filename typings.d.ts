export interface Tweet extends TweetBody {
  id: string;
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
