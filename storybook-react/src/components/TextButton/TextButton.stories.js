
import TextButton from "./index.jsx"

export default {
    title: "Components/TextButton",
    component: TextButton,
    argTypes: {
        label: {
            control: "text"
        }
    }
   
}

 export const Default = { 
        args:{
            label: "storybook TextButton"
        }
    }