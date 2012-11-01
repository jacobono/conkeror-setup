// bind M-y and M-C-y to search clipboard contents through google
define_key(content_buffer_normal_keymap, "M-y", "search-clipboard-contents");
define_key(content_buffer_normal_keymap, "C-M-y", "search-clipboard-contents-doublequoted");

// redefine C-f as "forwards" and C-b as "backwards"
// using F and B (that is Shift+F, Shift+B is actually rather inconvenient since 
// many other command use Control and so requires shifting fingers)
define_key(content_buffer_normal_keymap, "C-f", "forward");
define_key(content_buffer_normal_keymap, "C-b", "back");

// make M-f and M-b switch to next and previous buffers
define_key(content_buffer_normal_keymap, "M-f", "buffer-next");
define_key(content_buffer_normal_keymap, "M-b", "buffer-previous");

// redefine l as "follow link" (like f)
// (too many of the keys are for the left hand, I like "l" for "link")
define_key(content_buffer_normal_keymap, "l", "follow");

// Use M-l to follow link in new background buffer
define_key(default_global_keymap, "M-l", "follow-new-buffer-background");
