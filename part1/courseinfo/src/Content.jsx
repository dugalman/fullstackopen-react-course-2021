import Part from './Part'

const Content = props => {
  const { parts } = props

  const out = parts.map(t => <Part part={t.name} exercises={t.exercises} />)

  // let out = []
  // parts.forEach(t => {
  //   out.push(<Part part={t.name} exercises={t.exercises} />)
  // })

  return out
}

export default Content
