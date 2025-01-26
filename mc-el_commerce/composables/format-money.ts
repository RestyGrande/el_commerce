export default function (moneyInPesos: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP",
  });
  const formatted = formatter.format(moneyInPesos);
  return formatted.replace("₱", "₱ ");
}
