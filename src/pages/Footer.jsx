export default function Footer() {
  return (
    <footer className="bg-white pt-12">
      <h1 className="text-center text-4xl text-primary font-bold">
        Kinderwell
      </h1>
      <div className="mt-8 mb-16 px-12">
        <div className="max-w-3xl mx-auto text-xl md:text-2xl text-center font-bold">
          <p className="mb-5">
            Explore our resources to nurture your children’s health, understand
            their emotions, and manage illness.
          </p>
          <p>Join us in supporting their well-being and growth together!</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 my-8 text-sky-400 font-bold underline">
          <a className="hover:text-sky-600" href="">
            About Us
          </a>
          <a className="hover:text-sky-600" href="">
            Contact
          </a>
          <a className="hover:text-sky-600" href="">
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="text-center bg-primary py-4">
        <p className="text-white">
          &copy; 2022 Kinderwell. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
