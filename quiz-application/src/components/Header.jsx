import logo from '../assets/quiz-logo.png'
export default function Header() {
    return <header className='header'>
        <img src={logo} alt="quiz-logo" />
        <h1>Reactquiz</h1>
    </header>
}