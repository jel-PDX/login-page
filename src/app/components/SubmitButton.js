'use client'

export default function SubmitButton({onClick}) {
  return (
    <button className='border pl-1 pr-1 rounded-xl' onClick={onClick}>
      Submit
    </button>
  )
}
