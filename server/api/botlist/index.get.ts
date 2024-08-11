export default defineCachedEventHandler(async () => {
  return await $fetch("https://unbotme.yizack.com/api/botslist");
}, { maxAge: 86400 });
