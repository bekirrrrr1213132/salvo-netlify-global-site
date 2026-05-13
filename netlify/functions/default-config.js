const defaultLogo = `data:image/svg+xml,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
    <defs>
      <radialGradient id="g" cx="50%" cy="35%" r="70%">
        <stop offset="0" stop-color="#ffe08a"/>
        <stop offset="0.45" stop-color="#d9a93a"/>
        <stop offset="1" stop-color="#3b1118"/>
      </radialGradient>
    </defs>
    <rect width="300" height="300" rx="150" fill="#080a12"/>
    <circle cx="150" cy="150" r="126" fill="url(#g)" opacity="0.95"/>
    <circle cx="150" cy="150" r="104" fill="#0b0d17" stroke="#ffe08a" stroke-width="5"/>
    <text x="150" y="139" text-anchor="middle" font-size="76" font-family="Arial Black, Arial" fill="#ffe08a">S</text>
    <text x="150" y="189" text-anchor="middle" font-size="28" font-family="Arial Black, Arial" fill="#f5f0e8">METIN2</text>
  </svg>`)}`.trim();

export const defaultConfig = {
  logoSrc: defaultLogo,
  logoSourceLabel: "Varsayılan logo",
  title: "Salvo Metin2 Topluluğu",
  subtitle: "Topluluğun sosyal medya hesapları ve oynanan Metin2 sunucuları tek premium sayfada.",
  background: {
    type: "premium",
    imageSrc: "",
    imageSourceLabel: "",
    videoSrc: "",
    videoSourceLabel: "",
    overlay: 52
  },
  socials: [
    { key: "tiktok", name: "TikTok", url: "https://www.tiktok.com/" },
    { key: "twitch", name: "Twitch", url: "https://www.twitch.tv/" },
    { key: "kick", name: "Kick", url: "https://kick.com/" },
    { key: "youtube", name: "YouTube", url: "https://www.youtube.com/" }
  ],
  servers: [
    { name: "Server Alanı 1", logoSrc: "", logoSourceLabel: "", url: "" },
    { name: "Server Alanı 2", logoSrc: "", logoSourceLabel: "", url: "" },
    { name: "Server Alanı 3", logoSrc: "", logoSourceLabel: "", url: "" },
    { name: "Server Alanı 4", logoSrc: "", logoSourceLabel: "", url: "" },
    { name: "Server Alanı 5", logoSrc: "", logoSourceLabel: "", url: "" }
  ],
  sideBanners: {
    left: { name: "Sol Server Banner", imageSrc: "", imageSourceLabel: "", url: "" },
    right: { name: "Sağ Server Banner", imageSrc: "", imageSourceLabel: "", url: "" }
  }
};
