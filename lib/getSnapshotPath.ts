/**
 * return a file path from a "human readable" string.
 *
 * Example: `"Header with logged in user"` > `"Header-with-logged-in-user.png"`
 */
export const getSnapshotPath = (userFriendlyString: string) => {
  return userFriendlyString
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, "") // Remove non-alphanumeric characters except space
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .concat(".png"); // Append file extension
};
