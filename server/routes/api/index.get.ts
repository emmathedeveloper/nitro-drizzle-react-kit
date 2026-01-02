import { defineHandler } from "nitro/h3"


export default defineHandler(() => {
  
  return { success: true , message: "Hello" }
})