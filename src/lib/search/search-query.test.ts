import { describe, expect, it } from "vitest";
import { createSearchQuery, normalizeSearchTerm } from "./search-query";

describe("normalizeSearchTerm", () => {
	it.each([
		[null, ""],
		[undefined, ""],
		["", ""],
		["   ", ""],
		["  business permit  ", "business permit"]
	])("normalizes %j to %j", (term, expected) => {
		expect(normalizeSearchTerm(term)).toBe(expected);
	});
});

describe("createSearchQuery", () => {
	it.each([
		["business permit", "business permit"],
		["C++", "C++"],
		["permits & licenses", "permits & licenses"],
		["barangay #1", "barangay #1"],
		["100%", "100%"],
		["A+B", "A+B"],
		["Calapan lungsod", "Calapan lungsod"],
		["  birth certificate  ", "birth certificate"]
	])("round trips %j", (term, expected) => {
		const query = createSearchQuery(term);

		expect(new URLSearchParams(query).get("term")).toBe(expected);
	});

	it("uses standard query encoding", () => {
		expect(createSearchQuery("C++ & permits")).toBe("term=C%2B%2B+%26+permits");
	});
});
