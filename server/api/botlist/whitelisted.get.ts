export default defineCachedEventHandler(async () => {
  return await $fetch("https://service.unbot.me/api/goodbots");
}, { maxAge: 86400 });
