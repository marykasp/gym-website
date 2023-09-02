import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const SectionHeader = ({ children }: Props) => {
  return (
    <h2 className="basis-3/5 font-montserrat text-3xl font-bold text-center">
      {children}
    </h2>
  );
};

export default SectionHeader;
