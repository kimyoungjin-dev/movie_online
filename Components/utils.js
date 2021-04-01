export const trimText = (text, limit) =>
  text.length > limit ? `${text.slice(0, limit)}...` : text;

export const ButtonColor = "rgb(242, 184, 51)";
export const BackgroundColor = "rgb(32,33,35)";

export const LocaleDate = (date) => {
  const currentDate = new Date(date);
  return currentDate.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
