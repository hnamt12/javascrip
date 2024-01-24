const convertToCamelCase = (underscoreString) =>
  underscoreString.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const inputs = ['underscore_case', 'first_name', 'Some_Variable', 'calculate_AGE', 'delayed_departure'];

for (const input of inputs) {
  const camelCase = convertToCamelCase(input);
  const ticks = '✅'.repeat(camelCase.length);
  console.log(`${camelCase} ${ticks}`);
}
