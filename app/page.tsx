import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'


export default function Home() {
  return (
    <main>
    <Link className='btn btn-square btn-secondary' href="/users">Users Page</Link>
    </main>
  )
}
