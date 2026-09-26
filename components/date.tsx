import { format, parseISO } from "date-fns";

export default function DateLabel({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLL d, yyyy")}</time>;
}
