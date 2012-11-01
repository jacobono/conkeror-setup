//allow for 'contrib' stuff
load_paths.unshift("chrome://conkeror-contrib/content/");

// teach me something whenever I start my browser
homepage = "http://en.wikipedia.org/wiki/Special:Random";

// Mode-line
mode_line_mode(true);

// FAVICONS
//  require("favicon.js");
// add_hook("mode_line_hook", mode_line_adder(buffer_icon_widget), true);
// read_buffer_show_icons = true;

require("mode-line.js");
// funky icons in the modeline
require("mode-line-buttons.js");
mode_line_add_buttons(standard_mode_line_buttons, true);

// we'd like to see the # of buffers being loaded 
add_hook("mode_line_hook", mode_line_adder(loading_count_widget), true);

// but really we'd also like to know how many buffers are present and which is the current
add_hook("mode_line_hook", mode_line_adder(buffer_count_widget), true);

// remove the clock
remove_hook("mode_line_hook", mode_line_adder(clock_widget));

// give me new tabs; open buffers (tabs) in the background
require("new-tabs.js");
require("clicks-in-new-buffer.js");
clicks_in_new_buffer_target = OPEN_NEW_BUFFER_BACKGROUND; 
clicks_in_new_buffer_button = 1; //  midclick links in new buffers with

// auto completion in the minibuffer
minibuffer_auto_complete_default = true;
url_completion_use_history = true;
url_completion_use_bookmarks = true;

// display the url before going to it in hints mode
hints_display_url_panel = true;

//set emacs as external editor
editor_shell_command = "emacsclient -c";

// view source in your editor.
view_source_use_external_editor = true;

// [ref: http://www.mozdev.org/pipermail/conkeror/2009-February/001334.html ]
// (See also "**c" for selecting text)
interactive("search-clipboard-contents", "Search in Google the content of the X clipboard (the selected text)",
              "find-url",
              $browser_object=
              function(I) {
                  return "g "+ read_from_x_primary_selection();
              }
);
interactive("search-clipboard-contents-doublequoted", "Search in Google the content of the X clipboard (the selected text) as a fixed string",
              "find-url",
              $browser_object=
              function(I) {
                  return "g \""+ read_from_x_primary_selection()+"\"";
              }

);

// url translate quick key for google translate
function read_url_google_translate_handler (input) {
    var m = /^(\S+\|\S+)\s+(.*)/.exec(input);
    if (m)
        return "http://translate.google.com/#"+m[1]+"|"+m[2];
    return null;
}
read_url_handler_list = [read_url_google_translate_handler];

// open url in new background buffer  (I can't think of a good keybinding for this)
interactive("find-url-new-background-buffer",
    "Open a URL in a new background buffer",
    alternates(follow_new_buffer_background, follow_new_window),
    $browser_object = browser_object_url,
    $prompt = "Find url");

// keybindings
require("conkeror-keybindings.js");
// web jumps
require("conkeror-webjumps.js");
