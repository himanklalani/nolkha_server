import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "919999999999"; // Placeholder
  const message = "Hi Nolkha & Co, I would like to schedule a consultation.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-green-500 text-white rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl hover:bg-green-600 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
