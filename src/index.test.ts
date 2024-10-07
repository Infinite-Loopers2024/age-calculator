import { describe, test } from "node:test";
import { calculateAge } from  "./index";
import assert from "node:assert";

describe("input year", () => {
  test("should return age", () => {
    const currentYear = new Date().getFullYear();

    assert.equal(calculateAge(1999), currentYear-1999);
  });
});
