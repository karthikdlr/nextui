import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data = await fetch('https://api.restful-api.dev/objects/ff808181932badb6019376962b8347ac',{method: 'GET',
     headers: {'Content-Type': 'application/json'}
    })

  const posts = await data.json()
  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
  res.status(200).json({ message: posts })
}