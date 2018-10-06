import {
  BrowserWindow,
  BrowserWindowConstructorOptions,
  NativeImage
} from "electron";

export interface IOptions {
  [key: string]: (window: BrowserWindow, ...args: any[]) => void;
}

export type IMultiArgOptionMap = [
  string[],
  (window: BrowserWindow, ...args: any[]) => void
];

export const optionMap: IOptions = {
  alwaysOnTop: (browserWindow: BrowserWindow, alwaysOnTop: boolean) =>
    browserWindow.setAlwaysOnTop(alwaysOnTop),
  autoHideMenuBar: (browserWindow: BrowserWindow, autoHideMenuBar: boolean) =>
    browserWindow.setAutoHideCursor(autoHideMenuBar),
  center: (browserWindow: BrowserWindow, center: boolean) => {
    if (center) {
      browserWindow.center();
    }
  },
  closable: (browserWindow: BrowserWindow, closable: boolean) =>
    browserWindow.setClosable(closable),
  disableAutoHideCursor: (
    browserWindow: BrowserWindow,
    autoHideCursor: boolean
  ) => browserWindow.setAutoHideCursor(!autoHideCursor),
  focusable: (browserWindow: BrowserWindow, focusable: boolean) =>
    browserWindow.setFocusable(focusable),
  fullscreen: (browserWindow: BrowserWindow, fullscreen: boolean) =>
    browserWindow.setFullScreen(fullscreen),
  fullscreenable: (browserWindow: BrowserWindow, fullscreenable: boolean) =>
    browserWindow.setFullScreenable(fullscreenable),
  hasShadow: (browserWindow: BrowserWindow, hasShadow: boolean) =>
    browserWindow.setHasShadow(hasShadow),
  icon: (browserWindow: BrowserWindow, icon: NativeImage) =>
    browserWindow.setIcon(icon),
  kiosk: (browserWindow: BrowserWindow, kiosk: boolean) =>
    browserWindow.setKiosk(kiosk),
  maximizable: (browserWindow: BrowserWindow, maximizable: boolean) =>
    browserWindow.setMaximizable(maximizable),
  minimizable: (browserWindow: BrowserWindow, minimizable: boolean) =>
    browserWindow.setMinimizable(minimizable),
  movable: (browserWindow: BrowserWindow, movable: boolean) =>
    browserWindow.setMovable(movable),
  parent: (browserWindow: BrowserWindow, parent: BrowserWindow) =>
    browserWindow.setParentWindow(parent),
  resizable: (browserWindow: BrowserWindow, resizable: boolean) =>
    browserWindow.setResizable(resizable),
  // On the docs but not on the typings
  // https://github.com/electron/electron/blob/master/docs/api/browser-window.md#winsetsimplefullscreenflag-macos
  // simpleFullscreen: (browserWindow: BrowserWindow, simpleFullscreen: boolean) =>
  //   browserWindow.setSimpleFullScreen(simpleFullscreen),
  show: (browserWindow: BrowserWindow, show: boolean) =>
    show ? browserWindow.show() : browserWindow.hide(),
  skipTaskbar: (browserWindow: BrowserWindow, skipTaskbar: boolean) =>
    browserWindow.setSkipTaskbar(skipTaskbar),
  title: (browserWindow: BrowserWindow, title: string) =>
    browserWindow.setTitle(title),
  // On the docs but not on the typings
  // https://github.com/electron/electron/blob/master/docs/api/browser-window.md#winsetopacityopacity-windows-macos
  // opacity: (browserWindow: BrowserWindow, opacity: number) =>
  //   browserWindow.setOpacity(opacity),
  vibrancy: (
    browserWindow: BrowserWindow,
    vibrancy:
      | "appearance-based"
      | "light"
      | "dark"
      | "titlebar"
      | "selection"
      | "menu"
      | "popover"
      | "sidebar"
      | "medium-light"
      | "ultra-dark"
  ) => browserWindow.setVibrancy(vibrancy)
};

export const multiArgOptionMap: IMultiArgOptionMap[] = [
  [
    ["width", "height"],
    (browserWindow: BrowserWindow, width: number, height: number) =>
      browserWindow.setSize(width, height)
  ],
  [
    ["x", "y"],
    (browserWindow: BrowserWindow, x: number, y: number) =>
      browserWindow.setPosition(x, y)
  ]
];
