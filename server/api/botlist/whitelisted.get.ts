export default defineCachedEventHandler(async () => {
  return await $fetch("https://unbotme.yizack.com/api/goodbots");
}, { maxAge: 86400 });
