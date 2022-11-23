import React from "react"
import { getProviders } from "next-auth/react"
import SignInComponent from "./SignInComponent"
import Image from "next/image"

async function SignInPage() {
    const providers = await getProviders()

    return (
        <div className="grid justify-center">
            <div>
                <Image
                    className="rounded-full mx-2 object-cover"
                    width={700}
                    height={700}
                    src="https://links.papareact.com/161"
                    alt="Sign In Logo"
                />
            </div>

            <SignInComponent providers={providers} />
        </div>
    )
}

export default SignInPage
