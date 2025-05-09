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
      .replaceAll(/[^\d\sa-z]/g, "") // Remove non-alphanumeric characters except space
      // should fail
      .replace(/\s+/g, "-") + // Replace spaces with hyphens
    ".png" // Append file extension
  );
};
