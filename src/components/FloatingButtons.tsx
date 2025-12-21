import Icon from "@/components/ui/icon";

export default function FloatingButtons() {
  return (
    <div className="fixed left-6 bottom-6 z-50 flex flex-col gap-4">
      <a
        href="https://t.me/GKgranit19"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#0088cc] hover:bg-[#006699] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Telegram"
      >
        <Icon name="Send" size={24} />
      </a>
      
      <a
        href="https://wa.me/79490732315"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#1da851] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="WhatsApp"
      >
        <Icon name="MessageCircle" size={24} />
      </a>
    </div>
  );
}