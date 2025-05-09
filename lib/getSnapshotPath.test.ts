import { describe, expect, it } from "vitest";

import { getSnapshotPath } from "./getSnapshotPath";

describe("getSnapshotPath", () => {
  it("converts to lowercase and replaces spaces with hyphens", () => {
    expect(getSnapshotPath("My Snapshot Title")).toBe("my-snapshot-title.png");
  });

  it("removes special characters", () => {
    expect(getSnapshotPath("Cool @#$% Snapshot!")).toBe("cool-snapshot.png");
  });

  it("handles multiple spaces", () => {
    expect(getSnapshotPath("Snapshot   with   too many  spaces")).toBe(
      "snapshot-with-too-many-spaces.png",
    );
  });

  it("trims leading and trailing spaces", () => {
    expect(getSnapshotPath("   Trimmed Snapshot   ")).toBe(
      "trimmed-snapshot.png",
    );
  });

  it("handles numbers and letters together", () => {
    expect(getSnapshotPath("Version 2 Release")).toBe("version-2-release.png");
  });
});
