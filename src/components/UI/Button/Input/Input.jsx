import { forwardRef } from 'react'
import '../../../../styles/Input.scss'


const Input = forwardRef((props, ref) => {

    return (
      <input ref={ref} {...props} className={input_elem}/>
    )
})



export default Input