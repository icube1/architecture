import Counter from './Counter'
import './Counter.scss'

type Props = {}

const FirstComponent = (props: Props) => {
  return (
    <>
      <div className='logo'>FirstComponent</div>
      <Counter />
    </>
  )
}

export default FirstComponent