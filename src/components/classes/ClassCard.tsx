import { ClassType } from '../../shared/types';

type Props = {
  type: ClassType;
};

const ClassCard = ({ type }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex flex-col items-center justify-center 
  h-[380px] w-[450px] whitespace-normal bg-primary-500 text-center text-white opacity-0 transition 
  duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{type.name}</p>
        <p className="mt-5">{type.description}</p>
      </div>
      <img
        src={type.image}
        alt={`${type.image}`}
      />
    </li>
  );
};

export default ClassCard;
