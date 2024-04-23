import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src='/evento.png'
      alt="EVENTO logo"
      width={53}
      height={12}
    />
  )
}