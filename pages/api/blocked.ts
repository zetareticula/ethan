import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    error:
      "Read Lease instead of Multi-tenancy ",});
  return res.end();
}


// Path: pages/api/hello.ts