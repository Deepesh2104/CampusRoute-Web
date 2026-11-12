export function fmtMoney(n: number): string {
  return '₹' + Math.round(n).toLocaleString('en-IN');
}

export function fmtLakh(n: number): string {
  if (n >= 1e5) {
    return (
      '₹' +
      (n / 1e5).toFixed(1).replace('.0', '') +
      ' lakh'
    );
  }
  return fmtMoney(n);
}
