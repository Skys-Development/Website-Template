import React from 'react';
import {
  Youtube,
  Disc as Discord,
  TwitchIcon,
  Twitter,
  Instagram,
  MessageCircleHeart,
  Heart,
  Code2,
  Gamepad2,
  ExternalLink,
  Camera,
  Send,
  MessageCircle
} from 'lucide-react';

const socialLinks = [
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://www.youtube.com/@William2sober?sub_confirmation=1',
    bgColor: 'hover:bg-red-500',
  },
  {
    name: 'Discord',
    icon: Discord,
    url: 'https://discord.gg/48BDu759Yc',
    bgColor: 'hover:bg-indigo-500',
  },
  {
    name: 'TikTok',
    icon: MessageCircle,
    url: 'https://www.tiktok.com/@raeleenboyfriend',
    bgColor: 'hover:bg-black',
  },
  {
    name: 'Twitch',
    icon: TwitchIcon,
    url: 'https://www.twitch.tv/william2sober',
    bgColor: 'hover:bg-purple-500',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://x.com/william2sober',
    bgColor: 'hover:bg-blue-400',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/william2sober',
    bgColor: 'hover:bg-pink-500',
  },
  {
    name: 'Snapchat',
    icon: Camera,
    url: 'https://www.snapchat.com/add/william2sober?invite_id=HTorO4e4&locale=en_US&share_id=fUkyDr73TYGoiK_ioBIRdg&sid=aa185111bbb749228e352dee768fbb67',
    bgColor: 'hover:bg-yellow-400',
  },
  {
    name: 'Telegram',
    icon: Send,
    url: 'https://t.me/william2sober',
    bgColor: 'hover:bg-blue-500',
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    url: 'https://api.whatsapp.com/send/?phone=13099483484&text&type=phone_number&app_absent=0',
    bgColor: 'hover:bg-green-500',
  },
];

function App() {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-purple-400 ring-opacity-50">
            <img
              src="/william2sober.png"
              alt="William2Sober"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
            William2Sober
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-purple-200 mb-4">
            <Code2 size={20} />
            <span>Coder</span>
            <span>&</span>
            <Gamepad2 size={20} />
            <span>Gamer</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 text-purple-200">
            <div className="flex items-center gap-2">
              <span>15 Years Old</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <MessageCircleHeart size={20} />
              <span>In love with Raeleen</span>
            </div>
            <div className="flex items-center gap-2 mb-8">
              <Heart size={16} className="text-red-400" />
              <span>Stay Sober</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className={`flex items-center justify-between p-4 rounded-xl bg-white/10 backdrop-blur-sm 
                         transition-all duration-300 ${link.bgColor} hover:scale-[1.02]
                         text-white hover:text-white group`}
            >
              <div className="flex items-center gap-4">
                <link.icon size={24} />
                <span className="font-medium">{link.name}</span>
              </div>
              <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        <footer className="mt-12 text-center text-purple-200/60 text-sm">
          <p>© {currentYear} William2Sober</p> {/* Dynamically renders current year */}
          <p className="mt-2">Made with ❤️ by Techllko</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
