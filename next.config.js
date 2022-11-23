/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: [
            "links.papareact.com",
            "platform-lookaside.fbsbx.com",
            "scontent.fyxd2-1.fna.fbcdn.net",
        ],
    },
    experimental: {
        appDir: true,
    },
}
