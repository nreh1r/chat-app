import Pusher from "pusher"
import ClientPusher from "pusher-js"

export const serverPusher = new Pusher({
    appId: "1506790",
    key: "7e36a159b2a01d71b674",
    secret: process.env.PUSHER_SECRET,
    cluster: "us3",
    useTLS: true,
})

export const clientPusher = new ClientPusher("7e36a159b2a01d71b674", {
    cluster: "us3",
    forceTLS: true,
})
