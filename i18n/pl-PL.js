let plPL = {

  "pageTitle"    : "Nintendo Switch Payload Loader",
  "pageSubtitle" : "Fusee Launcher przeportowany na JavaScript wykorzystujący WebUSB.",
  "dangerDanger"   :"Aplikacja została w miarę przetestowana. Nikt nie zgłosił żadnych błędów, ale nie jestem odpowiedzialny za cokolwiek, jeżeli coś pójdzie nie tak!",
  "warningWindows" :"Aplikacja nie działa na Windowsie, ze względu na ograniczenia w implementacji WebUSB w Chrome (pewnie z innych powodów też!)",
  "warningBrowser" :"Aplikacja działa tylko w Chrome, ponieważ inne przeglądarki nie implementują WebUSB.",
  "warningLinux"   :"Na Linuksie, możesz dostać błąd  'Access Denied' lub 'No Compatible Device' po kliknięciu Połącz! W takiej sytuacji stwórz plik <code>/etc/udev/rules.d/50-switch.rules</code> z zawartością<br><code>SUBSYSTEM==\"usb\", ATTR{idVendor}==\"0955\", MODE=\"0664\", GROUP=\"plugdev\"</code>.",
  "warningTested"  :"Aplikacja została przetestowana na Linuksie, OSX, Androidzie (bez roota) i Chromebookach. Ale u Ciebie nie musi działać.",
  "labelInstructions" :"Instrukcja",
  "liRCM"          :"Przełącz Switcha w tryb RCM i podłącz do swojego urządzenia",
  "liSelect"       :"Wybierz gotowy payload, lub załaduj własny",
  "liPress"        :"Wybierz 'Dostarcz Payload!'",
  "liAPX"          :"Następnie wybierz 'APX' i 'Połącz'.",
  "liLaunch"       :"Jeżeli się udało, to payload zostanie uruchomiony!",
  "labelContribute" :'If you would like to help adding another translation or updating/adding a payload, check <a href="https://github.com/AtlasNX/web-cfw-loader/blob/master/CONTRIBUTING.md">this</a>.',
  "h1SetupDelivery" :"Wybierz konfigurację payloadu",
  "h4SelectPayload" :"Wybierz Payload",
  "optionAtmosphere" :"Atmosphère 0.19.2",
  "optionSXOS"      :"SX OS",
  "optionReiNX"     :"ReiNX 2.0",
  "optionCTCaerHekate" :"CTCaer's Hekate Mod v5.5.5",
  "optionFusee"     :"(Re)Switched testowy payload (fusee)",
  "optionUpload"    :"Załaduj payload",
  "h3Log"           :"Log:",
  "h4GetByteArray"  :"Uzyskaj ciąg bajtów payloadu (nie uruchamiaj)",
  "goButton"        :"Dostarcz payload",
  "clearlogsbutton" :"Wyczyść logi",
  "disclaimer1" :'Źródła możesz znaleźć na <a href="https://github.com/AtlasNX/web-cfw-loader/">GitHub</a> (Albo przeglądając źródła strony, Aplikacja nie wykorzystuje backendu!).',
  "disclaimer2" :'Przeportowano <a href="https://github.com/reswitched/fusee-launcher">fusee-launcher</a>.',
  "disclaimer3" :'Podziękowania należą się <a href="https://github.com/ktemkin">ktemkin</a> i <a href="https://github.com/reswitched">ReSwitched</a>, oraz <br><a href="https://github.com/atlas44">Atlas44</a> i <a href="https://atlas44.s3-us-west-2.amazonaws.com/web-fusee-launcher/index.html">jego stronie</a> jako punkt startu dla tej aplikacji',
  "disclaimer4" :'Na końću, podziękowania należą się <a href="https://github.com/falquinho">falquinho</a> Dla nowego układu strony w bootstrapie i portugalskiego tłumaczenia, <a href="https://github.com/Filo97">Filo97</a> za włoskie tłumaczenie, <a href="https://github.com/tumGER">tumGER</a> za niemieckie tłumaczenie, <a href="https://github.com/lordfriky">Lord_Friky</a> za hiszpańskie tłumaczenie i dla <a href="https://github.com/lorek123">Lorek</a> za polskie tłumaczenie.'
}
