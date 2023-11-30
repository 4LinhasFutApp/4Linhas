import Link from "next/link"

export default function Login() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='border-2 border-gray-200 rounded p-12'>
      <div className='text-4xl text-emerald-600 p-12'>4Linhas</div>
      <div className='flex flex-col text-black space-y-2'>
        <div className='flex flex-col'>
        Email
        <input type="email" placeholder='Email' className='border'/>

        </div>
        <div className='flex flex-col'>
        Senha
        <input type="password" placeholder='Senha'  className='border' />
        <a href="google.com" className='text-xs mt-1'>Esqueci a senha</a>
        </div>
        </div>
      <div className='flex flex-col mt-4'>
        <Link href="/login" className='p-2 border bg-white text-black mb-4'>
          Login
        </Link>
        <Link href="/signin" className='border bg-emerald-600 text-white p-2'>
          Cadastre-se
        </Link>
      </div>
      <div className='text-black p-2 mt-0'>
        <Link href="/help" className='text-xs p-2'>Ajuda</Link>
        <Link href="/privacy" className='text-xs p-2'>Privacidade</Link>
        <Link href="/terms" className='text-xs p-2'>Termos de uso</Link>
      </div>
      </div>

    </main>
  )
}
