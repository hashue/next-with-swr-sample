import type { NextApiRequest, NextApiResponse } from "next";

type res = {
  id: number;
  name: string;
  age: number | null;
};

export default (req: NextApiRequest, res: NextApiResponse<res>) => {
  setTimeout(() => {
    res.status(200).json({ id: 1, name: "admin", age: null });
  }, 15000);
};
