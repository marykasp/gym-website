import AnchorLink from 'react-anchor-link-smooth-scroll';
import { BenefitType, SelectedPage } from '../../shared/types';

type Props = {
  benefit: BenefitType;
  setSelectedPage: (page: SelectedPage) => void;
};

const BenefitCard = ({ benefit, setSelectedPage }: Props) => {
  return (
    <div
      className={`mt-5 rounded-md border-2 border-gray-100 ${benefit.color} px-5 py-16 text-center`}
    >
      <div className="mb-4 flex justify-center">
        <div className="p-4 rounded-full border-2 border-gray-100 bg-gray-100">
          {benefit.icon}
        </div>
      </div>

      <h4 className="font-bold">{benefit.title}</h4>
      <p className="my-3">{benefit.description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </div>
  );
};

export default BenefitCard;
