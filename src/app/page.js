import Card from "./components/card"

export default function Beranda() {
  return (
    <>
      <Card judul={'Ini Judulnya'} dibuatKapan={'9/9/1997'} href={'/post'}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A tempora nobis similique! Accusantium, ducimus blanditiis, suscipit facilis iure ex ratione dolor consequatur ad maxime quidem, assumenda reiciendis deleniti adipisci deserunt?...
      </Card>
      <Card judul={'Judulnya 2'} dibuatKapan={'4/5/1997'} href={'#'}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A tempora nobis similique! Accusantium, ducimus blanditiis, suscipit facilis iure ex ratione dolor consequatur ad maxime quidem, assumenda reiciendis deleniti adipisci deserunt?...
      </Card>
      <Card judul={'Judulnya 3'} dibuatKapan={'4/5/1997'} href={'#'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sunt quos, quo dignissimos ipsa provident possimus laboriosam ut. Consequatur adipisci ullam illo autem voluptates! Distinctio, corrupti illo. Et, mollitia reiciendis?...
      </Card>
    </>
  )
}
