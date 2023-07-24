import { SignUp } from "@clerk/nextjs/app-beta/client"

function SignIn() {
  return (
    <div className="w-screen h-screen flex justify-center items-center p-20">
      <SignUp redirectUrl={'/'} />
    </div>
  )
}

export default SignIn