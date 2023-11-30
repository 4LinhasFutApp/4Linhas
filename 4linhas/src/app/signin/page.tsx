import Link from "next/link";

export default function Sigin() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='border-2 border-gray-200 rounded p-12'>
      <h1 className='text-4xl text-emerald-600 p-8'>Cadastro</h1>
      <div className='flex flex-col text-black space-y-4'>
        <div className='flex flex-col space-y-4'>
          <div>
            <h2 className="text-xs ">Email</h2>
            <input type="email" placeholder='Email' className='border'/>
          </div>
          <div>
            <h2 className="text-xs">Nome completo</h2>
            <input type="name" placeholder='Nome completo'  className='border' />
          </div>
          <div>
            <h2 className="text-xs">Senha</h2>
            <input type="password" placeholder='Senha'  className='border' />
          </div>
          <div>
            <h2 className="text-xs">Confirmar senha</h2>
            <input type="password" placeholder='Confirmar senha'  className='border' />
          </div>
        </div>
        </div>
      <div className='flex flex-col mt-8 space-y-2'>
        <button className='p-2 border bg-emerald-600 text-white mb-4'>Cadastrar</button>
        
        <Link href="/" className='border bg-white text-black p-2 text-center'>
          Voltar
        </Link>
      </div>
      </div>

    </main>
  )
}
