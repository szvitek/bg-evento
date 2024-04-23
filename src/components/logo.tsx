import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/evento.png" alt="EVENTO logo" width={53} height={12} />
    </Link>
  );
}
