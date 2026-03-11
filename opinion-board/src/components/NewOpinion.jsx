import { useActionState , use} from "react"
import { OpinionsContext } from "../store/opinions-context"
import Submit from "./Submit"

export function NewOpinion() {
  const {addOpinion} = use(OpinionsContext)

  async function handleAction(prevStateValue, formData) {
    const userName = formData.get('userName')
    const title = formData.get('title')
    const body = formData.get('body')

    let errors = []

    if (!userName.trim()) {
      errors.push("user name is Empty , please enter your name ")
    }
    if (title.trim() < 5) {
      errors.push("Title must contain atleast 5 character")
    }
    if (body.trim().length < 10 || body.trim().length > 300) {
      errors.push("body must containg charecter between 10 to 300")
    }

    if (errors.length > 0) {
      return {
        errors, enterValue: {
          userName,
          title,
          body
        }
      }
    }

    await addOpinion({userName , title ,body})
    return { errors: null }
  }

  const [formState, fromAction] = useActionState(handleAction, { errors: null })

  return (

    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={fromAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.enterValue?.userName} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.enterValue?.title} />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.enterValue?.body}></textarea>
        </p>

        {formState.errors &&
          (<ul className="errors">
            {formState.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>)
        }

        <Submit/>
      </form>
    </div>
  );
}
