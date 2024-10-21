interface BotaoProps {
    cor?
    className?: string
    children
    onClick?: () => void
}
 const colorVariants = {
        blue: 'bg-gradient-to-r from-blue-400 to-blue-700',
        green: 'bg-gradient-to-r from-green-400 to-green-700',
        gray: 'bg-gradient-to-r from-gray-400 to-gray-700',
        red: 'bg-gradient-to-r from-red-400 to-red-700',
      }

export default function Botao(props: BotaoProps) {
    
    return (
        <button type='button' onClick={props.onClick} className={`
            ${colorVariants[props.cor]}
            text-white font-semibold
            px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}