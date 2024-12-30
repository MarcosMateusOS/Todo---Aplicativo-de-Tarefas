
import { app } from "./app";
import env from "./env";

app.listen({
    port: env.PORT
}, (err) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log('Server is running on port 8080')
})