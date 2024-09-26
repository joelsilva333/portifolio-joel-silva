const NotFoundPage: React.FC = () => {
    return <div className="w-screen h-screen flex justify-center items-center flex-col gap-2 bg-[#0F172A] text-[#DEE5EF]">

        <h1 className="text-4xl">Página não encontrada!</h1>
        Volte para a página inicial.
        <a href="/portifolio-joel-silva" className="text-blue-400 font-bold">Clique aqui</a>
    </div>
}

export default NotFoundPage