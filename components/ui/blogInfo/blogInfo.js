import { changeFormatDate } from "@/components/dateFormat";
export default function BlogInfo({ date, read_time }) {
  return (
    <div className="flex items-center gap-2 py-4 text-nl_background">
      <p className="text-[12px] font-bold uppercase">
        {changeFormatDate(date)}
      </p>
      <p className="rounded-full bg-nl_background w-[5px] h-[5px]"></p>
      <p className="text-[12px] font-bold uppercase">{read_time} MIN READ</p>
    </div>
  );
}
