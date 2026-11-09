/**
 * Central Configuration for Clue AI Web
 * Single source of truth for versioning, creator details, and download assets.
 */

export const APP_VERSION = '5.9.9';
export const APP_VERSION_TAG = `v${APP_VERSION}`;

export const CREATOR = {
  name: 'Farhan Khalid',
  github: 'https://github.com/HelloWorld-Farhan',
  repo: 'https://github.com/HelloWorld-Farhan/ClueAi-Web',
  desktopRepo: 'https://github.com/HelloWorld-Farhan/ClueAi',
  website: 'https://github.com/HelloWorld-Farhan',
  supportEmail: 'farhankhalid17968@gmail.com',
};

export const DOWNLOAD_LINKS = {
  // Windows Direct Binary Downloads (Bypasses TinyURL Interstitials)
  windowsExeDirect: `https://github.com/HelloWorld-Farhan/ClueAi/releases/latest/download/ClueAI.exe`,
  windowsGitHubExe: `https://github.com/HelloWorld-Farhan/ClueAi/releases/download/v${APP_VERSION}/ClueAI.exe`,
  windowsPsScript: `irm https://raw.githubusercontent.com/HelloWorld-Farhan/ClueAi-Web/main/install.ps1 | iex`,
  windowsCmdScript: `curl -fsSL https://github.com/HelloWorld-Farhan/ClueAi/releases/latest/download/ClueAI.exe -o ClueAI.exe && start ClueAI.exe`,

  // macOS Direct Binary Downloads
  macDmgDirect: `https://github.com/HelloWorld-Farhan/ClueAi/releases/latest/download/ClueAI-mac.dmg`,
  macGitHubDmg: `https://github.com/HelloWorld-Farhan/ClueAi/releases/download/v${APP_VERSION}/ClueAI-mac.dmg`,
  macCurlScript: `curl -fsSL https://github.com/HelloWorld-Farhan/ClueAi/releases/latest/download/ClueAI-mac.dmg -o ClueAI.dmg && hdiutil attach ClueAI.dmg`,

  // Linux Direct Binary Downloads
  linuxAppImageDirect: `https://github.com/HelloWorld-Farhan/ClueAi/releases/latest/download/ClueAI-linux.AppImage`,
  linuxScript: `curl -fsSL https://github.com/HelloWorld-Farhan/ClueAi/releases/latest/download/ClueAI-linux.AppImage -o ClueAI.AppImage && chmod +x ClueAI.AppImage && ./ClueAI.AppImage`,
};

