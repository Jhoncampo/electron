const { dialog, Menu } = require("electron");

const setMainMenu = (mainWindow) => {
  const template = [
    {
      label: "View",
      submenu: [
        { role: "reload" },
        { role: "forceReload" },
        { role: "toggleDevTools" },
        { type: "separator" },
        { role: "resetZoom" },
        { role: "zoomIn" },
        { role: "zoomOut" },
        { type: "separator" },
        { role: "togglefullscreen" },
      ],
    },
    {
      label: "jhonmarckdown",
      submenu: [
        { role: "about" },
        { type: "separator" },
        { role: "services" },
        { type: "separator" },
        { role: "hide" },
        { role: "hideOthers" },
        { role: "unhide" },
        { type: "separator" },
        { role: "quit" },
      ],
    },
    {
      label: "Opciones",
      submenu: [
        {
          label: "Abrir archivo",
          click: () => {
            dialog.showOpenDialog(mainWindow, {
              filters: [{ name: "Markdown", extensions: ["md"] }],
              title: "Abre tu archivo markdown",
              defaultPath: "~/Desktop",
              properties: ["openFile", "openDirectory"],
            });
          },
        },
      ],
    },
    {
      label: "Themes",
      submenu: [
        {
          label: "light",
          click: () => {
            mainWindow.webContents.send("update-theme", "light");
          },
        },
        {
          label: "Dark",
          click: () => {
            mainWindow.webContents.send("update-theme", "dark");
          },
        },
      ],
    },
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
};

module.exports = {
  setMainMenu,
};
