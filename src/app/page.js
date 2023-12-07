import Image from 'next/image'
import PageHeader from './pageheader/PageHeader.js'
import PageForms from './pageforms/PageForms.js'

export default function MyApp() {
  return (
    <div className="mt-4">
      <PageHeader />
      <hr className="max-w-screen-md mx-auto mt-8 mb-8"/>
      <PageForms />
      <div className="max-w-screen-md mx-auto">
        <a href="./resetpassword">Forgot your password?</a>
      </div>
    </div>
  )
}
