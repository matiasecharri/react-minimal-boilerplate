export const getErrorMessage = (error: unknown) => {
  if (!(error instanceof Error)) return "An unknown error occurred.";

  const message = error.message;

  if (message.includes("404")) return "Content not found.";
  if (message.includes("500")) return "Server error.";
  return "An unexpected error occurred.";
};
