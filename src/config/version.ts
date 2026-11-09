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
  // Windows
  windowsExeDirect: `https://tinyurl.com/2a2lfo9a`,
  windowsGitHubExe: `https://github.com/HelloWorld-Farhan/ClueAI/releases/latest/download/ClueAI-v${APP_VERSION}.exe`,
  windowsPsScript: `irm https://raw.githubusercontent.com/HelloWorld-Farhan/ClueAi-Web/main/install.ps1 | iex`,
  windowsCmdScript: `curl -fsSL https://github.com/HelloWorld-Farhan/ClueAI/releases/latest/download/ClueAI-v${APP_VERSION}.exe -o ClueAI.exe && start ClueAI.exe`,

  // macOS
  macDmgDirect: `https://tinyurl.com/2yynsmoo`,
  macGitHubDmg: `https://github.com/HelloWorld-Farhan/ClueAI/releases/latest/download/ClueAI-${APP_VERSION}-mac.dmg`,
  macCurlScript: `curl -fsSL https://github.com/HelloWorld-Farhan/ClueAI/releases/latest/download/ClueAI-${APP_VERSION}-mac.dmg -o ClueAI.dmg && hdiutil attach ClueAI.dmg`,

  // Linux
  linuxAppImageDirect: `https://github.com/HelloWorld-Farhan/ClueAI/releases/latest/download/ClueAI-${APP_VERSION}-linux.AppImage`,
  linuxScript: `curl -fsSL https://github.com/HelloWorld-Farhan/ClueAI/releases/latest/download/ClueAI-${APP_VERSION}-linux.AppImage -o ClueAI.AppImage && chmod +x ClueAI.AppImage && ./ClueAI.AppImage`,
};
