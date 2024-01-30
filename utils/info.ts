export const SITE = {
  title: "Unbotme • Ban Twitch malicious bots",
  name: "unbot.me",
  description: "Unbotme is a bot for Twitch designed to automatically ban identified bots that persistently lurk in channels.",
  keywords: "twitch, bot, ban, malicious bots, unbotme, unbot.me, lurk, viewers, chatters, viewers count, list",
  bot_name: "unbotme",
  host: process.dev ? "http://localhost:5173" : "https://unbot.me",
  socket: "https://unbotme.yizack.com"
};

export const INDEX = {
  description: `<span class="text-primary">@${SITE.bot_name}</span> is a bot for Twitch designed to automatically ban identified bots that persistently lurk in channels.`,
  login_button: "LOG IN WITH TWITCH",
  guide: [
    {
      title: "Have you ever noticed random users like these appearing in your viewers list even when you're not live?",
      image: "/images/example-1.jpg"
    },
    {
      title: "What they do?",
      subtitle: "Most of them:",
      list_type: "ul",
      list: [
        "Are malicious bots (with few exceptions).",
        "Attempts to attract attention, leading you or your audience to visit their channels and possibly exposing you to ads for their profit or other unknown intentions.",
        "Collects your metadata for unknown purposes.",
        "Makes your viewer list very inaccurate compared to your actual number of spectators, as they don't count towards views.",
        "Are identified and listed as bots on multilpe websites."
      ],
    },
    {
      title: "Our solution",
      subtitle: `What <span class="text-primary">@${SITE.bot_name}</span> do:`,
      list_type: "ul",
      list: [
        "Monitors your channel's viewer list, and upon detecting any of those bots, it automatically bans them for you.",
        "Exempts banning good bots that are genuinely there for beneficial purposes.",
      ],
      image: "/images/example-2.jpg"
    },
    {
      title: "How to start?",
      list_type: "ol",
      list: [
        "Click on \"LOG IN\".",
        "Authenticate your Twitch channel.",
        "Click on \"JOIN MY CHANNEL\".",
        `Ensure that you have granted moderator privileges to <span class="text-primary">@${SITE.bot_name}</span>.`,
        "You are ready!"
      ],
      image: "/images/example-3.jpg"
    }
  ]
};
