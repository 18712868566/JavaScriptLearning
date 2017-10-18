##Sublime text3中配置Github

[Sublime text3中配置Github](http://www.cnblogs.com/BobGo/p/5998339.html)

##Sublime text3用户设置

```
{
    "auto_complete_triggers":
    [
        {
            "characters": "<",
            "selector": "text.html"
        },
        {
            "characters": "/",
            "selector": "string.quoted.double.html,string.quoted.single.html, source.css"
        }
    ],
    "auto_find_in_selection": true,
    "bold_folder_labels": true,
    "caret_style": "phase",
    "color_scheme": "Packages/Color Scheme - Default/Monokai.tmTheme",
    "fade_fold_buttons": false,
    "font_face": "Microsoft YaHei Mono",
    "font_size": 13,
    "highlight_line": true,
    "highlight_modified_tabs": true,
    "ignored_packages":
    [
        "Markdown",
        "Vintage"
    ],
    "overlay_scroll_bars": "enabled",
    "rulers":
    [
    ],
    "save_on_focus_lost": true,
    "spell_check": false,
    "tab_size": 4,
    "theme": "Default.sublime-theme",
    "translate_tabs_to_spaces": true,
    "trim_automatic_white_space": true,
    "trim_trailing_white_space_on_save": true,
    "update_check": false,
    "word_wrap": false,
    "wrap_width": 80
}
```

##Sublime text3用户设置快捷键

```
[
    //
    { "keys": ["ctrl+shift+alt+a"], "command": "alignment" },
    // open in browser
    { "keys": ["ctrl+b"], "command": "open_in_browser" },
    { "keys": ["ctrl+shift+c"], "command": "copy_path" },
     // { "keys": ["alt+f12"], "command": "open_in_browser" },//默认浏览器打开
     { "keys": ["ctrl+fn+f1"], "command": "side_bar_files_open_with",  // ctrl+fn+f1在firefox中打开
        "args": {
            "paths": [],
            "application": "E:\\browser\\firefox\\firefox.exe",
            "extensions":".*" //any file with extension
        }
    },
    { "keys": ["ctrl+fn+f2"], "command": "side_bar_files_open_with",  // ctrl+fn+f2在chrome中打开
        "args": {
            "paths": [],
            "application": "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
            "extensions":".*" //any file with extension
        }
    },
    { "keys": ["ctrl+fn+f3"], "command": "side_bar_files_open_with",  // ctrl+fn+f3在ie中打开
        "args": {
            "paths": [],
            "application": "C:\\Program Files\\Internet Explorer\\iexplore.exe",
            "extensions":".*" //any file with extension
        }
    },
    { "keys": ["ctrl+fn+f4"], "command": "side_bar_files_open_with",  // ctrl+fn+f4在360 browser中打开
        "args": {
            "paths": [],
            "application": "D:\\Program Files\\360se6\\Application\\360se.exe",
            "extensions":".*" //any file with extension
        }
    }
]
```
