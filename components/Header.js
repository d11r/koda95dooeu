import Underline from './Underline'

export default function Header({title}) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">
        Položi COD95 i Postani Profesionalni <Underline>Vozač u EU!</Underline>
      </h2>
    </>
  )
}
