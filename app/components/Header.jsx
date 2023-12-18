import Link from 'next/link'
import Logo from '../../public/logo-shop.png';
import Image from 'next/image';
import LogoutButton from './LogoutButton';

export default function Header( {user} ) {
    return (
        <nav>
            <Image
                src={Logo}
                alt='shop logo'
                width={70}
                placeholder='blur'
                quality={100}
            />
          <Link href='/'><h1>Shopify</h1></Link>
          <Link href='/products' className='mr-auto' >Products</Link>

          {user && <span>Hello, {user.email}</span>}
          <LogoutButton />
        </nav>
    )
}