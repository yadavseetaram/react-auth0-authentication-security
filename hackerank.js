function repeatedString(s, n) {
  if (s === "a") return n;
  const aInString = s.split("").filter((subStr) => subStr === "a");
  const countOfAInString = aInString.length;
  const strLenght = s.length;
  let remainder, devides;
  devides = n / strLenght;
  remainder = n % strLenght;
  let count = 0;
  count = count + countOfAInString * devides;
  const subStringFrom0ToRemainder = s
    .slice(0, remainder)
    .split("")
    .filter((a) => a === "a");

  return Math.floor(count + subStringFrom0ToRemainder.length);

  // Write your code here
}

const expected1 = 51574523448;
const result1 = repeatedString(
  "kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm",
  736778906400
);

const result = repeatedString(
  "ojowrdcpavatfacuunxycyrmpbkvaxyrsgquwehhurnicgicmrpmgegftjszgvsgqavcrvdtsxlkxjpqtlnkjuyraknwxmnthfpt",
  685118368975
);
const runTest = (expected) =>
  console.log(
    `Test ${
      expected === result
        ? "Passed"
        : "Expected is: " + expected + " but got: " + result
    }`
  );

// runTest(expected1, result1);
runTest(685118368975);
