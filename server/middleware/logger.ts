import { defineHandler } from 'nitro/h3'

export default defineHandler((event) => {
    console.log(event.toJSON());
})