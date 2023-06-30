const initialDate = new Date(2023, 6, 1);
const revealDate = new Date(2023, 6, 30);
const currentDate = new Date();

export function isTheDay(): boolean {
  return formatDate(currentDate) === formatDate(revealDate);
}
export function passedDays(): number {
  const days = Math.floor(
    (currentDate.getTime() - initialDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  return days + 1;
}
function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}
