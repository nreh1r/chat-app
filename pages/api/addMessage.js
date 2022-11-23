// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { serverPusher } from "../../pusher"
import redis from "../../redis"

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({ name: "Method Not Allowed" })
        return
    }

    const { message } = req.body

    const newMessage = {
        ...message,
        // Replace the timestamp of the user to the timestamp of the server
        created_at: Date.now(),
    }

    // push to upstad redis db
    await redis.hset("messages", message.id, JSON.stringify(newMessage))
    serverPusher.trigger("message", "new-message", newMessage)

    res.status(200).json({ message: newMessage })
}
