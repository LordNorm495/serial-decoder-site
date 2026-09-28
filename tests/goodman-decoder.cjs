const assert = require('node:assert/strict');
const ts = require('typescript');
const fs = require('node:fs');
const vm = require('node:vm');
const sandbox = { exports: {}, Date };
const compiled = ts.transpileModule(fs.readFileSync('lib/decoders.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
}).outputText;
vm.runInNewContext(compiled, sandbox);
const { decodeByBrand, autoDetect } = sandbox.exports;
for (const brand of ['goodman', 'amana-hvac', 'daikin']) {
  // Manufacturer examples identify 1306 as June 2013, not week six.
  const result = decodeByBrand('1306123456', brand);
  assert.equal(result.year, 2013);
  assert.equal(result.month, 6);
  assert.equal(result.monthName, 'June');
  assert.equal(result.week, null);
  assert.equal(result.error, undefined);
  assert.equal(decodeByBrand('9912123456', brand).year, 1999);
  assert.equal(decodeByBrand('0001123456', brand).month, 1);
  assert.equal(decodeByBrand('13 06 123456', brand).month, 6);
  for (const invalid of ['1843123456', '1300123456', '1313123456', '130612345', '13061234567', '1A06123456', '1306ABCDEF', '7901123456']) {
    const failure = decodeByBrand(invalid, brand);
    assert.ok(failure.error, `${brand} accepted ${invalid}`);
    assert.equal(failure.year, null);
    assert.equal(failure.month, null);
  }
}
assert.ok(autoDetect('1306123456').some(x => x.brand === 'goodman'));
assert.ok(!autoDetect('1843123456').some(x => x.brand === 'goodman'));
assert.ok(!autoDetect('1306ABCDEF').some(x => x.brand === 'goodman'));
console.log('Goodman-family regression checks passed: date, month, format, century, future date, and auto-detection.');
