export default function Button({ children, textOnly , ...props}) {
    const css= textOnly ? 'text-button' : 'button'

    return <button className={css} {...props}>{children}</button>
}