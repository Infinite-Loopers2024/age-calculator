import { describe, test } from "node:test";
import assert from "node:assert";
import { input } from "./index.js";

describe("input year", () => {
  test("should return age", () => {
    assert.strictEqual(input(1999), 25);
  });
});
