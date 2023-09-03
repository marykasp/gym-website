import { ReactNode } from 'react';
import Lotus from '@/assets/lotus-flower.png';

type Props = {
  children: ReactNode;
};

const SectionHeader = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={Lotus}
        alt="Lotus flower icon"
      />
      <h2 className="font-montserrat uppercase text-3xl font-bold">
        {children}
      </h2>
    </div>
  );
};

export default SectionHeader;
