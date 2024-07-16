import FormNonControlle from "./FormNonControlle"
import FormControlle from "./FormControlle"
import FormHook from "./FormHook"
export default function Contact() {
    return <>
        <div>
            Formulaire non controlé
            <FormNonControlle/>

            Formulaire controlé
            <FormControlle/>

            Formulaire avec React-Hook-Form
            <FormHook/>
        </div>
    </>
}