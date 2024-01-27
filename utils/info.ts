export const SITE = {
  name: "unbot.me",
  bot_name: "unbotme",
};

export const INDEX = {
  description: `<span class="text-primary">@${SITE.bot_name}</span> is a bot for Twitch designed to automatically ban identified bots that persistently lurk in channels.`,
  join_button: "JOIN MY CHANNEL",
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
        "Attempts to attract attention, leading you or your auidience to visit their channels and possibly exposing you to ads to gain revenue or other unknown intentions.",
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
        "Click on the \"JOIN MY CHANNEL\" button.",
        "Authenticate your Twitch channel.",
        "This site will tell you that the bot has joined your channel.",
        `Ensure that you have granted moderator privileges to <span class="text-primary">@${SITE.bot_name}</span>.`
      ],
      image: "/images/example-3.jpg"
    }
  ]
};