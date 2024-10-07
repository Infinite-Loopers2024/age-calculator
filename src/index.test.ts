import { describe, test } from "node:test";
import { calculateAge } from "./index";
import assert from "node:assert";

describe("calculateAge", () => {
  test("should return age", () => {
    assert.equal(calculateAge("1999-03-12"), 25);
  });
  test("should return month", () => {
    assert.equal(calculateAge("1999-03-12"), 25);
  });
});
