// Function to format phone number
export function formatPhoneNumber(phone) {
  return phone.replace(/(\d{2})(?=\d)/g, "$1 ");
}
