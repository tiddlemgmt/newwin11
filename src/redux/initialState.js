import { icons } from "../assets";
import CommandLineApp from "../comps/CommandLineApp";
import FileExplorerApp from "../comps/FileExplorerApp";
import SettingsApp from "../comps/SettingsApp";
import { WIN_FEATURES } from "../const/winSize";
import { newActiveWindow } from "./feat/desktopSlice";

const initialState = {
  activeWindows: [],
  pinnedApps: [
    {
      name: "File Explorer",
      icon: icons.apps.winFileExplorer,
      width: 25,
      height: 25,
      onClick: (e, dispatch) => {
        dispatch(
          newActiveWindow({
            title: "File Explorer",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: FileExplorerApp,
          })
        );
      },
    },
    {
      name: "WhatsApp",
      icon: icons.apps.whatsapp,
      width: 28,
      height: 28,
      onClick: () => {
        const textMessage = encodeURIComponent(
          "Hello Deri Kurniawan!, [your message here]"
        );
        window.open(
          `https://wa.me/+6285720959031?text=${textMessage}`,
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "Based Chrome",
      icon: icons.apps.chrome,
      width: 28,
      height: 28,
      onClick: () => {
        window.open(
          "https://www.google.com/search?q=Deri+Kurniawan+github",
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "Visual Studio Code",
      icon: icons.apps.vscode,
      width: 28,
      height: 28,
      onClick: () => {
        window.open("https://vscode.dev", "_blank", WIN_FEATURES);
      },
    },
    {
      name: "Settings",
      icon: icons.apps.winSettings,
      width: 28,
      height: 28,
      onClick: (e, dispatch) => {
        dispatch(
          newActiveWindow({
            title: "Settings",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: SettingsApp,
          })
        );
      },
    },
  ],
  shortcutApps: [
    {
      name: "Based Chrome",
      icon: icons.apps.chrome,
      width: 35,
      height: 35,
      onClick: () => {
        window.open(
          "https://www.google.com/search?q=why+i+so+based",
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "BasedGit",
      icon: icons.apps.github,
      width: 35,
      height: 35,
      onClick: () => {
        window.open(
          "https://github.com/search?q=how%20to%20launch%20token%20on%20base%20network&type=repositories",
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "BasedIn",
      icon: icons.apps.linkedin,
      width: 35,
      height: 35,
      onClick: () => {
        window.open(
          "https://www.linkedin.com/jobs/fast-food-jobs-las-vegas-metropolitan-area?position=1&pageNum=0",
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "Based Studio Code",
      icon: icons.apps.vscode,
      width: 35,
      height: 35,
      onClick: () => {
        window.open("https://vscode.dev", "_blank", WIN_FEATURES);
      },
    },
    {
      name: "BasedApp",
      icon: icons.apps.whatsapp,
      width: 35,
      height: 35,
      onClick: () => {
        const textMessage = encodeURIComponent(
          "Hello Deri Kurniawan!, [your message here]"
        );
        window.open(
          `https://t.me/base_os`,
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "Command Prophecy",
      icon: icons.apps.winCMD,
      width: 35,
      height: 35,
      onClick: (e, dispatch) => {
        dispatch(
          newActiveWindow({
            title: "C:\\Windows\\system32\\cmd.exe",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: CommandLineApp,
          })
        );
      },
    },
    // {
    //   name: "Windows Defender",
    //   icon: icons.apps.winDefender,
    //   width: 35,
    //   height: 35,
    //   onClick: () => null,
    // },
    {
      name: "File Exploiter",
      icon: icons.apps.winFileExplorer,
      width: 35,
      height: 35,
      onClick: (e, dispatch) => {
        dispatch(
          newActiveWindow({
            title: "File Explorer",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: FileExplorerApp,
          })
        );
      },
    },
    {
      name: "Mail",
      icon: icons.apps.winMail,
      width: 35,
      height: 35,
      onClick: () => (window.location.href = "mailto:deri.netuchi@gmail.com"),
    },
    // {
    //   name: "Search",
    //   icon: icons.apps.winSearch,
    //   width: 35,
    //   height: 35,
    //   onClick: () => null,
    // },
    {
      name: "Settings",
      icon: icons.apps.winSettings,
      width: 35,
      height: 35,
      onClick: (e, dispatch) => {
        dispatch(
          newActiveWindow({
            title: "Settings",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: SettingsApp,
          })
        );
      },
    },
    // {
    //   name: "Trash Full",
    //   icon: icons.apps.winTrashFull,
    //   width: 35,
    //   height: 35,
    //   onClick: () => null,
    // },
    {
      name: "DexTools",
      icon: icons.apps.dextools,
      width: 35,
      height: 35,
      onClick: () => {
        window.open(
          "https://www.dextools.io/app/en/pairs",
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "Twitter",
      icon: icons.apps.twitter,
      width: 35,
      height: 35,
      onClick: () => {
        window.open(
          "https://x.com/basedoscoin",
          "_blank",
          WIN_FEATURES
        );
      },
    },
  ],
};

export default initialState;
