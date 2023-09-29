import {useState} from 'react'
import {
  BgContainer,
  TextContainer,
  Heading,
  Para,
  Image,
  BottomContainer,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const [showFullDescription, setLength] = useState(false)

  const {reactHooksDescription} = props

  const onCLickBtn = () => {
    setLength(prevState => !prevState)
  }

  const btnText = showFullDescription ? 'Read Less' : 'Read More'

  const description = showFullDescription
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  return (
    <BgContainer>
      <TextContainer>
        <Heading>React Hooks</Heading>
        <Para>Hooks are a new addition to React</Para>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <BottomContainer>
          <Para>{description}</Para>
          <Button type="button" onClick={onCLickBtn}>
            {btnText}
          </Button>
        </BottomContainer>
      </TextContainer>
    </BgContainer>
  )
}

export default ReadMore
