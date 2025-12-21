import Icon from "@/components/ui/icon";

export default function TopContactBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4">
      <div className="container mx-auto flex items-center justify-center gap-6 text-sm">
        <a
          href="https://t.me/+79173347022"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Icon name="Send" size={16} />
          <span className="hidden sm:inline">Telegram:</span>
          <span className="font-medium">+7 (917) 334-70-22</span>
        </a>
        
        <a
          href="https://t.me/GKgranit19"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Icon name="MessageSquare" size={16} />
          <span className="hidden sm:inline">Канал</span>
        </a>
      </div>
    </div>
  );
}
