export default defineCachedEventHandler(async () => {
  return await $fetch("https://unbotme.yizack.com/api/badbots");
}, { maxAge: 86400 });
