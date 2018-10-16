import { Request, Response, Router } from "express"

const router: Router = Router()

router.get("/", (req: Request, res: Response) => {
    /* tslint:disable-next-line:no-console */
    console.log(req.cookies)
    res.send("Hello World!")
})

export const QuestionsController: Router = router
