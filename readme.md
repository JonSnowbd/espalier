## Minimal LESS/CSS Framework.
The ideals behind Espalier were to give a few lightweight and subtle classes to aid minimalistic projects or kickstart hand-crafted sites.
This by no means is fully featured toolbox like Bootstrap or Foundation, but rather a utility belt with detachable pouches.

### Gulp tasks
This project uses gulp to automatically build the css required for production. This is optional of course, I will always leave a fully built .css in the builtcss folder for grabs without having to download the whole repo/build it yourself. To start, simply download the repo and open a command window inside of it. Then 'npm install' to get the gulp packages, then any of the following gulp commands to build.

Commands and tasks:
* 'gulp' - The default task will simply compile the css once without pausing/waiting for changes
* 'gulp watch' - Watch for any changes in the less folder and recompile. this is useful in conjunction with the provided 
* 'gulp build' - same as default but will minify and place in ./builtcss/min/

### Building/Distribution
All the modules are held in ./less/main.less . Simply delete any import to remove its contents, there are no inter-dependancies between them, you could simply take the grid alone if you so wished. Once you have modified it to your liking(protip- You can use index.html to preview any changes)

### Download
The CSS is already built in ./builtcss/main.css . I will add a direct download link when I feel the project is complete.

### Class list / utilities

.pull-left, pull-right, .container

.text-mute

.panel, .hero, .button