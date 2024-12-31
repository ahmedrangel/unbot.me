export default defineCachedEventHandler(async () => {
  return await $fetch("https://service.unbot.me/api/botslist");
}, { maxAge: 86400 });
