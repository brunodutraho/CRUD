interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: string
    somenteLeitura?: boolean
    valor
    valorMudou?:(valor) => void
    className: string
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label htmlFor="" className='mb-2 font-medium'>
                {props.texto}
            </label>
            <input 
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-50
                    px-4 py-2
                    ${props.somenteLeitura ? '' : 'focus:bg-white'}
                    `}
            />
        </div>
    )
}