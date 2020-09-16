function dateFormat(dateRes) {
  const year = dateRes.getFullYear();
  const month = dateRes.getMonth();
  const day = dateRes.getDate();
  const rus = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
  return `${day} ${rus[month]}, ${year}`;
}

export default { dateFormat };