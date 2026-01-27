import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
      <SignIn />
    </div>
  )
}
