$(function () {
    const remote = require('electron').remote;
    const Menu = remote.Menu;
    //渲染进程
    const ipc = require('electron').ipcRenderer;

    var menu = new Menu.buildFromTemplate([
        {
            label: '菜单',
            submenu: [
                {
                    label: '打开新窗口',
                    click: function(){
                        ipc.send('show')
                    }
                }
            ]
        }
    ]);
    Menu.setApplicationMenu(menu);
});