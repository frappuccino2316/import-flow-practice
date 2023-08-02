export const pickup = (content: string) => {
  const rows = content.split('\n');
  const importRows = rows.filter((row) => row.length >= 6 && row.slice(0, 6) === 'import');
  return importRows;
};
