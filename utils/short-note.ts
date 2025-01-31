export const shortNote = (note: string) => {
  const maxLength = 50;
  return note.length > maxLength ? note.substring(0, maxLength) + "..." : note;
};
