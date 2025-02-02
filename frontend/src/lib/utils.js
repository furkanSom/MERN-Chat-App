export function formatMessageTime(date) {
  return new Date(date).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
}
