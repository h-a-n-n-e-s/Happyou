#  Happyou -- HTML5-based presentations that make you happy

Happyou (from Japanese 発表（はっぴょう）[ha／ppʲoː‾] meaning "presentation") is an HTML5-based template to prepare presentations. It might be interesting for people currently using LaTeX Beamer or other scripting solutions for that purpose. The poor support of interactive multimedia content in LaTeX Beamer was the main reason to start this project. In a modern browser, the possibilities for interactive audio-visual presentations are unlimited and furthermore, all core technologies for the world wide web are free, open, and well-documented standards. What other reasons do you need?

There are already many online presentation creation apps out there where you can click yourself into (questionable) happiness. Happyou is not like that at all but follows the idea that "whatever you see is based on what you write in plain text" (like LaTeX) and is kept as simple as possible for maximum clarity. You edit one HTML and one CSS file, that's it for editing! There is one JavaScript file providing basic functionality, like switching slides with the arrow keys (you would only edit that one to alter or add functionality). Any other files you need are the media you want to present -- your images, videos, music, fonts, interactive visualizations, or that website you would like to embed in your talk!


### Features

- The browser will remember the current slide it is showing if you reload the HTML file. This is very important if you work on a presentation, you do not want to navigate from slide 0 to slide 42 each time you change something...

- You can select the appropriate aspect ratio for your slides to match the aspect ratio of the beamer you will present with, thereby making optimal use of the available screen. There is nothing more sad than showing a 16:9 video on a 4:3 slide of a 16:9 screen...

- Mathematical typesetting is possible through MathJax, it is currently included from an online server, but a local copy could also be used.

- Slide navigation is not only possible with left/right arrow keys but also with a remote control (which by default sends page-down/page-up signals).

- As a standard feature inherited from HTML5, using UTF-8 encoding you can write text in whatever writing system you prefer in the editor (for example, Arabic, Chinese, Japanese, Latin) and it appears like that in the presentation.

- The style and functionality of Happyou can be modified and extended very easily since only free, open, and well-documented standards are used.


![happyou_template_screen_shot](https://user-images.githubusercontent.com/20040365/52105865-c7df5280-2633-11e9-9b0b-98996a8d3506.jpg)

### How to use

To have a working example, it is useful to download all files including the folders with example images, videos, etc. Then just open the HTML file in your favorite browser. Edit the HTML or CSS template file in your favorite editor and then reload the HTML file in the browser to see the changes. To spot possible errors it is a good idea to open the browser's console.


### Remarks

Happyou was tested and works with at least these browsers: Chrome, Firefox, Opera, Safari. (I was not able or interested in testing on IE/Edge, anyone who wants to try: good luck!) Still, there are a few remarks:

- The browser remembers the current slide number through local storage. To identify the presentation it uses the HTML file name. If you have several presentations you are working on at the same time, make sure the names of the HTML files are not the same, otherwise on reload the browser will always use the current slide number information from the last presentation you were going through.
In Safari, local storage (and therefore remembering the current slide number) is not available by default. To enable local storage, set "Disable Local File Restrictions" in the Develop menu. Without local storage Safari will always show the first slide after reload.

- In Firefox, for some miraculous reason, it is by default not possible to go to "real" full screen mode (without address bar and tabs). You have to enable the extension "Fullscreen Plus" and then press shift-control-f to go to full screen.
