"use client";

type GoogleFundingChoices = {
  callbackQueue?: Array<() => void>;
  showRevocationMessage?: () => void;
};

declare global {
  interface Window {
    googlefc?: GoogleFundingChoices;
  }
}

export default function PrivacySettingsLink() {
  function openSettings() {
    const googlefc = window.googlefc;

    if (googlefc?.showRevocationMessage) {
      googlefc.callbackQueue ??= [];
      googlefc.callbackQueue.push(googlefc.showRevocationMessage);
      return;
    }

    window.location.assign("/privacy");
  }

  return (
    <button type="button" onClick={openSettings} className="hover:text-white">
      Privacy &amp; cookie settings
    </button>
  );
}
