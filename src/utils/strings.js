export const kebabCaseToCapWords = (kebabCaseString) => {
  const stringParts = kebabCaseString.split('-');
  const capStringParts = stringParts.map(
    (sp) => sp[0].toUpperCase() + sp.slice(1)
  );
  return capStringParts.join(' ');
};
