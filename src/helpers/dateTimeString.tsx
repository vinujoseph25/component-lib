const dateTimeString = (inputDate: Date | string, locale) => {
  const date: Date = typeof inputDate === 'string' ? new Date(inputDate) : inputDate;

  const dayStyle = new Intl.DateTimeFormat(locale, { day: '2-digit' });
  const monthStyle = new Intl.DateTimeFormat(locale, { month: 'short' });
  const yearStyle = new Intl.DateTimeFormat(locale, { year: 'numeric' });
  const timeStyle = new Intl.DateTimeFormat(locale, { timeStyle: 'short' } as any);

  return `${dayStyle.format(date)}-${monthStyle.format(date)}-${yearStyle.format(date)} ${timeStyle.format(date)}`;
};

export default dateTimeString;
