window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", googleAccountConversionTagID);

gtag("event", "conversion", {
  send_to: googleConversionTagEventSentTo,
  value: googleConversionTagValue,
  currency: "USD",
});
