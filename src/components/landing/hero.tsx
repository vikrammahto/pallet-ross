import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  const images = [
    { src: '/image/img-01.png' },
    { src: '/image/img-02.png' },
    { src: '/image/img-03.png' },
    { src: '/image/img-04.png' },
    { src: '/image/img-05.png' },
    { src: '/image/img-06.png' },
    { src: '/image/img-07.png' },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-36 text-center">
      <h1 className="text-4xl font-medium md:text-7xl">
        A place to display your <br />
        masterpiece.
      </h1>
      <div className="flex py-12">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            width={300}
            height={300}
            alt={`Image ${index + 1}`}
            className="rounded-xl"
          />
        ))}
      </div>
      <p className="font-semibold">
        Artists can display their masterpieces, and buyers can disover and{' '}
        <br />
        purchase works that resonate with them.
      </p>
      <div className="mt-4 flex items-center justify-center gap-4">
        <button className="rounded-full bg-black px-6 py-2 text-white">
          Join for $9.99/m
        </button>
        <Link
          href="/#"
          className="rounded-full bg-slate-100 px-6 py-2 text-black"
        >
          Read more
        </Link>
      </div>
    </section>
  );
}
