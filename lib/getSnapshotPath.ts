/**
 * return a file path from a "human readable" string.
 *
 * Example: `"Header with logged in user"` > `"Header-with-logged-in-user.png"`
 */
export const getSnapshotPath = (userFriendlyString: string) => {
  return (
    userFriendlyString
      .toLowerCase()
      .trim()
      .replaceAll(/[^\d\sa-z]/g, "") // removes non-alphanumeric characters except space
      .replaceAll(/\s+/g, "-") + // replaces spaces with hyphens
    ".png"
  );
};
