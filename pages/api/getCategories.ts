// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  categories:Category[]
}
const query=groq`*[_type=="category"]`

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const categories=await sanityClient.fetch(query)

  
}
