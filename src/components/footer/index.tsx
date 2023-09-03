import Logo from '@/assets/evoyoga-logo.png';

const Footer = () => {
  return (
    <footer className="py-16 bg-primary-100">
      <div className="md:flex justify-between mx-auto w-5/6 gap-16">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img
            src={Logo}
            alt="EvoYoga logo"
          />
          <p className="text-sm my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
            sunt fugiat ab quidem quod omnis? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Beatae sunt fugiat ab quidem quod
            omnis?
          </p>
          <p className="text-xs">EvoYoga All Rights Reserved</p>
        </div>
        <div className="mt-16 md:mt-0 basis-1/4">
          <h4 className="font-bold">Links</h4>
          <p className="my-3">Lorem ipsum dolor sit.</p>
          <p className="my-3">Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className="mt-16 md:mt-0 basis-1/4">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam?
          </p>
          <p>(555)-555-555</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
