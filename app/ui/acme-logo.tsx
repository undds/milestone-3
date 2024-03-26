import { lusitana } from '@/app/ui/fonts';
import { FaTruck } from 'react-icons/fa';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <FaTruck className="h-12 w-12 pt-[5px] pr-[10px]" />
      <p className="padding-left-[5px] text-[44px]">Test Name</p>
    </div>
  );
}
