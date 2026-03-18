type DateInput = Date | string | number;

const getDate = (dateInput: DateInput): string => {
  const date = new Date(dateInput);
  const now = new Date();

  if (isNaN(date.getTime())) {
    return "Unknown date";
  }

  const dayOfMonth = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = Math.round(diffSec / 60);
  const diffHour = Math.round(diffMin / 60);
  const diffDay = Math.round(diffHour / 24);

  const formattedYear = year.toString().slice(-2);
  const formattedMonth = month < 10 ? "0" + month : month.toString();
  const formattedDay =
    dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth.toString();
  const formattedHour = hour < 10 ? "0" + hour : hour.toString();
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes.toString();

  if (diffSec < 1) {
    return "right now";
  }

  if (diffSec < 60) {
    return `${diffSec} second${diffSec !== 1 ? "s" : ""} ago`;
  }

  if (diffMin < 60) {
    return `${diffMin} minute${diffMin !== 1 ? "s" : ""} ago`;
  }

  if (diffHour < 24) {
    return `${diffHour} hour${diffHour !== 1 ? "s" : ""} ago`;
  }

  if (diffDay < 14) {
    return `${diffDay} day${diffDay !== 1 ? "s" : ""} ago`;
  }

  return `${formattedDay}.${formattedMonth}.${formattedYear} ${formattedHour}:${formattedMinutes}`;
};

export default getDate;
