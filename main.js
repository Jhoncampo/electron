const {app, BrowserWindow} = require("electron")

const createWindow = () => {
    const window = new BrowserWindow({
        with: 800,
        height: 600,
        minHeight: 400,
        minWidth: 400
    })

    window.loadFile("index.html")
}

app.whenReady().then(() => {
    createWindow()
})