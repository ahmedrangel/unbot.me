export default defineCachedEventHandler(async () => {
  return await $fetch("https://service.unbot.me/api/badbots");
}, { maxAge: 86400 });
