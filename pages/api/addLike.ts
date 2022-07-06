import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';

import { TweetBody } from '../../typings';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = req.body;
  console.log(data);
  const mutations = {
    mutations: [
      {
        createOrReplace: {
          _type: 'tweet',
          text: data.text,
          username: data.username,
          blockTweet: false,

          profileImage: data.profileImage,
          image: data.image,
        },
      },
    ],
  };
  const apiEndpoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;

  const result = await fetch(apiEndpoint, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
    },
    body: JSON.stringify(mutations),
    method: 'POST',
  });
  res.status(200).json({ message: 'Added' });
}
