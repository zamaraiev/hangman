import './hangmanDrawing.scss'

const HEAD = (
    <div className='head body-part'/>
)

const BODY = (
    <div className='body body-part'/>
)

const LEFT_ARM = (
    <div className='left-arm body-part'/>
)

const RIGHT_ARM = (
    <div className='right-arm body-part'/>
)

const RIGHT_LEG = (
    <div className='right-leg body-part'/>
)

const LEFT_LEG = (
    <div className='left_leg body-part'/>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps ={
    numberOfGuess: number
}

function HangmanDrawing({numberOfGuess}: HangmanDrawingProps){
    return <div className='hangmanDrawing'>
        {BODY_PARTS.slice(0, numberOfGuess)}
        <div className='line line-verticalSmall'/>
        <div className='line line-gorizontal'/>
        <div className='line line-vertical'/>
        <div className='line line-bottom'/>
    </div>
}

export default HangmanDrawing