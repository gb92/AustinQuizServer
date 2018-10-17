import { Request, Response, Router } from "express"
import { questions } from "../Data/questions"

const router: Router = Router()

router.get("/", (req: Request, res: Response) => {
    /* tslint:disable-next-line:no-console */
    console.log(req.cookies)
    const question = questions.getQuestion(1)
    res.send(JSON.stringify(question))

})

router.post("/:id", (req: Request, res: Response) => {
    const { id } = req.params
})

export const QuestionsController: Router = router
