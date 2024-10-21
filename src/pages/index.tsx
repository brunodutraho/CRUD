import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Botao from "./../components/Botao";
import Formulario from "../components/Formulario";
import useClientes from "./../hooks/useClientes";

export default function Home() {
	const {
		cliente,
		clientes,
		selecionadoCliente,
		excluirCliente,
		novoCliente,
		salvarCliente,
		tabelaVisivel,
		exibirTabela

	} = useClientes();

	return (
		<div
			className={`
    flex items-center justify-center
    bg-gradient-to-r from-blue-500 to-purple-500 h-screen 
    text-white
    `}
		>
			<Layout titulo="Cadastro Simples">
				{tabelaVisivel ? (
					<>
						<div className="flex justify-end">
							<Botao cor="blue" className="mb-4" onClick={novoCliente}>
								Novo Cliente
							</Botao>
						</div>
						<Tabela
							clientes={clientes}
							clienteSelecionado={selecionadoCliente}
							clienteExcluido={excluirCliente}
						/>
					</>
				) : (
					<Formulario
						cliente={cliente}
						clienteMudou={salvarCliente}
						cancelado={exibirTabela}
					/>
				)}
			</Layout>
		</div>
	);
}
