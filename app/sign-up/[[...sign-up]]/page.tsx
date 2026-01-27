import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
      <SignUp />
    </div>
  )
}
