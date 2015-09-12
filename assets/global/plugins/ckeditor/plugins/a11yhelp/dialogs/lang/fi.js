﻿/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
 */
CKEDITOR.plugins.setLang("a11yhelp", "fi", {
    title: "Saavutettavuus ohjeet",
    contents: "Ohjeen sisällöt. Sulkeaksesi tämän dialogin paina ESC.",
    legend: [{
        name: "Yleinen",
        items: [{
            name: "Editorin työkalupalkki",
            legend: "Paina ${toolbarFocus} siirtyäksesi työkalupalkkiin. Siirry seuraavaan ja edelliseen työkalupalkin ryhmään TAB ja SHIFT-TAB näppäimillä. Siirry seuraavaan ja edelliseen työkalupainikkeeseen käyttämällä NUOLI OIKEALLE tai NUOLI VASEMMALLE näppäimillä. Paina VÄLILYÖNTI tai ENTER näppäintä aktivoidaksesi työkalupainikkeen."
        },
            {
                name: "Editorin dialogi",
                legend: "Dialogin sisällä, painamalla TAB siirryt seuraavaan dialogin kenttään, painamalla SHIFT+TAB siirryt aiempaan kenttään, painamalla ENTER lähetät dialogin, painamalla ESC peruutat dialogin. Dialogeille joissa on useita välilehtiä, paina ALT+F10 siirtyäksesi välillehtilistaan. Siirtyäksesi seuraavaan välilehteen paina TAB tai NUOLI OIKEALLE. Siirry edelliseen välilehteen painamalla SHIFT+TAB tai nuoli vasemmalle. Paina VÄLILYÖNTI tai ENTER valitaksesi välilehden."
            }, {
                name: "Editorin oheisvalikko",
                legend: "Paina ${contextMenu} tai SOVELLUSPAINIKETTA avataksesi oheisvalikon. Liiku seuraavaan valikon vaihtoehtoon TAB tai NUOLI ALAS näppäimillä. Siirry edelliseen vaihtoehtoon SHIFT+TAB tai NUOLI YLÖS näppäimillä. Paina VÄLILYÖNTI tai ENTER valitaksesi valikon kohdan. Avataksesi nykyisen kohdan alivalikon paina VÄLILYÖNTI tai ENTER tai NUOLI OIKEALLE painiketta. Siirtyäksesi takaisin valikon ylemmälle tasolle paina ESC tai NUOLI vasemmalle. Oheisvalikko suljetaan ESC painikkeella."
            }, {
                name: "Editorin listalaatikko",
                legend: "Listalaatikon sisällä siirry seuraavaan listan kohtaan TAB tai NUOLI ALAS painikkeilla. Siirry edelliseen listan kohtaan SHIFT+TAB tai NUOLI YLÖS painikkeilla. Paina VÄLILYÖNTI tai ENTER valitaksesi listan vaihtoehdon. Paina ESC sulkeaksesi listalaatikon."
            }, {
                name: "Editorin elementtipolun palkki",
                legend: "Paina ${elementsPathFocus} siirtyäksesi elementtipolun palkkiin. Siirry seuraavaan elementtipainikkeeseen TAB tai NUOLI OIKEALLE painikkeilla. Siirry aiempaan painikkeeseen SHIFT+TAB tai NUOLI VASEMMALLE painikkeilla. Paina VÄLILYÖNTI tai ENTER valitaksesi elementin editorissa."
            }]
    },
        {
            name: "Komennot",
            items: [{
                name: "Peruuta komento",
                legend: "Paina ${undo}"
            }, {
                name: "Tee uudelleen komento",
                legend: "Paina ${redo}"
            }, {
                name: "Lihavoi komento",
                legend: "Paina ${bold}"
            }, {
                name: "Kursivoi komento",
                legend: "Paina ${italic}"
            }, {
                name: "Alleviivaa komento",
                legend: "Paina ${underline}"
            }, {
                name: "Linkki komento",
                legend: "Paina ${link}"
            }, {
                name: "Pienennä työkalupalkki komento",
                legend: "Paina ${toolbarCollapse}"
            }, {
                name: "Siirry aiempaan fokustilaan komento",
                legend: "Paina ${accessPreviousSpace} siiryäksesi lähimpään kursorin edellä olevaan saavuttamattomaan fokustilaan, esimerkiksi: kaksi vierekkäistä HR elementtiä. Toista näppäinyhdistelmää päästäksesi kauempana oleviin fokustiloihin."
            },
                {
                    name: "Siirry seuraavaan fokustilaan komento",
                    legend: "Paina ${accessPreviousSpace} siiryäksesi lähimpään kursorin jälkeen olevaan saavuttamattomaan fokustilaan, esimerkiksi: kaksi vierekkäistä HR elementtiä. Toista näppäinyhdistelmää päästäksesi kauempana oleviin fokustiloihin."
                }, {
                    name: "Saavutettavuus ohjeet",
                    legend: "Paina ${a11yHelp}"
                }]
        }],
    backspace: "Backspace",
    tab: "Tab",
    enter: "Enter",
    shift: "Shift",
    ctrl: "Ctrl",
    alt: "Alt",
    pause: "Pause",
    capslock: "Caps Lock",
    escape: "Escape",
    pageUp: "Page Up",
    pageDown: "Page Down",
    end: "End",
    home: "Home",
    leftArrow: "Left Arrow",
    upArrow: "Up Arrow",
    rightArrow: "Right Arrow",
    downArrow: "Down Arrow",
    insert: "Insert",
    "delete": "Delete",
    leftWindowKey: "Left Windows key",
    rightWindowKey: "Right Windows key",
    selectKey: "Select key",
    numpad0: "Numeronäppäimistö 0",
    numpad1: "Numeronäppäimistö 1",
    numpad2: "Numeronäppäimistö 2",
    numpad3: "Numeronäppäimistö 3",
    numpad4: "Numeronäppäimistö 4",
    numpad5: "Numeronäppäimistö 5",
    numpad6: "Numeronäppäimistö 6",
    numpad7: "Numeronäppäimistö 7",
    numpad8: "Numeronäppäimistö 8",
    numpad9: "Numeronäppäimistö 9",
    multiply: "Multiply",
    add: "Add",
    subtract: "Subtract",
    decimalPoint: "Decimal Point",
    divide: "Divide",
    f1: "F1",
    f2: "F2",
    f3: "F3",
    f4: "F4",
    f5: "F5",
    f6: "F6",
    f7: "F7",
    f8: "F8",
    f9: "F9",
    f10: "F10",
    f11: "F11",
    f12: "F12",
    numLock: "Num Lock",
    scrollLock: "Scroll Lock",
    semiColon: "Puolipiste",
    equalSign: "Equal Sign",
    comma: "Pilkku",
    dash: "Dash",
    period: "Piste",
    forwardSlash: "Forward Slash",
    graveAccent: "Grave Accent",
    openBracket: "Open Bracket",
    backSlash: "Backslash",
    closeBracket: "Close Bracket",
    singleQuote: "Single Quote"
});