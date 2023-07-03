import { Request, Response } from "express";

export default interface Icontroller {
    [key: string]: (req: Request, res: Response) => void;
}