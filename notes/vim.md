/SUMMARIES FROM VIMTUTOR FOLLOW OTHER NOTES IMMEDIATELY BELOW:
'hjkl' to move around 
'0/$' jumps to beggining and end of line
gg to top of file
G to bottom of file
CTRL+A/X adds to/subtracts from number
CTRL-D/U moves screen down/up (half screen)
CTRL-F/B scrolls screen down/up (by whole screen)
zz = see context of current line (centers in screen)
zt/zb = puts cursor at top/bottom of screen
(n)gk/(n)gj = up/down certain number of lines
fx/tx = jumps to next letter (x)
be = backward / to end of word
CTRL-E/Y scrolls screen down/up (by line)
:split (testfile.c) 'splits window, use CTRL-W to switch between them
:highlight Visual cterm=reverse ctermbg=NONE 
:set number/nonumber 'shows line numbers
:set ic / noic 'ignore case
/ to find a word (? for reverse), and use n and N for next fwd or back respectively
3a!<Esc> = !!! 'appends 3 exclaimation marks
ZZ instead of :wq
:help index 'list of commands
CTRL-n = down n number of lines
rm -r directory and contents deleted
mv = rename or move file
. = wildcard (for searches)
"*" = searches for word under cursor (# for other direction, g*/g# partial matches)
/\<the\> = finds exact word "the" (can use one or both \< or \>)
'' = "backtick" takes you back to where you jumped off with "G" or other type of jump
m(a-z) with `(a-z) = bookmarks (set with m and goto with `) (` to column of exact place, ' to line of mark)
:marks = to see list of marks
X deletes char to left of cursor
D deletes to end of line
C changes to end of line
S change whole line
s change one letter
P puts before cursor
xp to swap letters (teh to the)
yy yanks whole line (y$ yanks from cursor to end of line, Y yanks whole line)
daw delete a word (whole word and white space from the middle)
das delete a sentence (between periods)
cis change inner sentence (between periods)
vas visual select sentence(es)
:1,3 t 5 copies lines 1-3 to after line 5. use m instead of t to move
"*yy / "*p to use clipboard (or edit menu)
:sort u i //sorts list leaving unique words and ignore case
CTRL+P/N to complete word from prev or next match
'.' (period) repeats last command (like df> to delete tags, or /four<enter> cwfive<Esc> n . n . etc.
ready to read urs_04.txt (4.5 moving text)

Hello World. What do you know? This is a sentence. This is a sentence. This is a sentence. 
mv this.txt that.txt (renames file)
ls -R (recursive) -S (sort by size) -t (sort by time modified) alias 
cd -, back to previous directory
ctrl+u, clears command line
ctrl+w, clears word
clear, clears terminal
tab, autocomplete

!!, executes last command
!open, executes last command that used “open”
!open:p, only displays last command that used “open" 
cd !$, different command with same last argument
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			       Lesson 1 SUMMARY

  1. The cursor is moved using either the arrow keys or the hjkl keys.

  2. To start Vim from the shell prompt type:  vim FILENAME <ENTER>

  3. To exit Vim type:	   <ESC>   :q!	 <ENTER>  to trash all changes.
	     OR type:	   <ESC>   :wq	 <ENTER>  to save the changes.

  4. To delete the character at the cursor type:  x

  5. To insert or append text type:
	 i   type inserted text   <ESC>		insert before the cursor
	 A   type appended text   <ESC>         append after the line

NOTE: Pressing <ESC> will place you in Normal mode or will cancel
      an unwanted and partially completed command.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			       Lesson 2 SUMMARY

  1. To delete from the cursor up to the next word type:    dw
  2. To delete from the cursor to the end of a line type:    d$
  3. To delete a whole line type:    dd

  4. To repeat a motion prepend it with a number:   2w
  5. The format for a change command is:
               operator   [number]   motion
     where:
       operator - is what to do, such as  d  for delete
       [number] - is an optional count to repeat the motion
       motion   - moves over the text ko operate on, such as  w (word),
		  $ (to the end of line), etc.

  6. To move to the start of the line use a zero:  0

  7. To undo previous actions, type: 	       u  (lowercase u)
     To undo all the changes on a line, type:  U  (capital U)
     To undo the undo's, type:		       CTRL-R

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			       Lesson 3 SUMMARY

  1. To put back text that has just been deleted, type   p . 
 
  2. To replace the character under the cursor, type   r   

  3. The change opertor allows you to change from the cursor to where the
     motion takes you.  eg. Type  ce  to change from the cursor to the end of
     the word,  c$  to change to the end of a line.

  4. The format for change is:

	 c   [number]   motion

     motion takes you.  eg. Type  ce  to change from the cursor to the end of
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			       Lesson 4 SUMMARY

  1. CTRL-G  displays your location in the file and the file status.
             G  moves to the end of the file.
     number  G  moves to that line number.
            gg  moves to the first line.

  2. Typing  /	followed by a phrase searches FORWARD for the phrase.
     Typing  ?	followed by a phrase searches BACKWARD for the phrase.
     After a search type  n  to find the next occurrence (N for reverse) 
     CTRL-O takes you back to older positions, CTRL-I to newer positions.

  3. Typing  %	while the cursor is on a (,),[,],{, or } goes to its match.

  4. To substitute new for the first old in a line type    :s/old/new
     To substitute new for all 'old's on a line type	   :s/old/new/g
     To substitute phrases between two line #'s type	   :#,#s/old/new/g
     To substitute all occurrences in the file type	   :%s/old/new/g
     To ask for confirmation each time add 'c'		   :%s/old/new/gc

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			       Lesson 5 SUMMARY

  1.  :!command  executes an external command.

	:!ls	        -  shows a directory listing.
	:!rm FILENAME   -  removes file FILENAME.

  2.  :w FILENAME  writes the current Vim file to disk with name FILENAME.

  3.  v  motion  :w FILENAME  saves the Visually selected lines in file
      FILENAME.

  4.  :r FILENAME  retrieves disk file FILENAME and puts it below the
      cursor position.

  5.  :r !dir  reads the output of the dir command and puts it below the
      cursor position.


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			       Lesson 6 SUMMARY

  1. Type  o  to open a line BELOW the cursor and start Insert mode.
     Type  O  to open a line ABOVE the cursor.

  2. Type  a  to insert text AFTER the cursor.
     Type  A  to insert text after the end of the line.

  3. The  e  command moves to the end of a word.

  4. The  y  operator yanks (copies) text,  p  puts (pastes) it.

  5. Typing a capital  R  enters Replace mode until  <ESC>  is pressed.

  6. Typing ":set xxx" sets the option "xxx".  Some options are:
  	'ic' 'ignorecase'	ignore upper/lower case when searching
	'is' 'incsearch'	show partial matches for a search phrase
	'hls' 'hlsearch'	highlight all matching phrases
     You can either use the long or the short option name.

  7. Prepend "no" to switch an option off:   :set noic

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			       Lesson 7 SUMMARY

  1. Type  :help  or press <F1> or <Help>  to open a help window.

  2. Type  :help cmd  to find help on  cmd .

  3. Type  CTRL-W CTRL-W  to jump to another window

  4. Type  :q  to close the help window

  5. Create a vimrc startup script to keep your preferred settings.

  6. When typing a  :  command, press CTRL-D to see possible completions.
     Press <TAB> to use one completion.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

print first line of text from file in terminal without having to open see close file
answer: head -1 filename
see last command in vim, when I bump a key
jump cursor to top/bottom of screen
CTRL+W switch windows
keyboard entry stack recall or HUD to indicate current and recent keypresses, UNDO reference
grep search and man page
:close (won't quit vim on last open window)
:only
:split two.c (this is very useful, to have 3 windows open: 1 notes, 2 instructions, 3 testing)
:res +/-/= N to resize windows up/down/equal sizes
record macros by typing q{register name) like qa, 
then edit some text and stop recording by typing q again,
then use macros with @{register name} like @a or @b, repeat with @@ or 5@a
Macro register text can be edited by putting the text on a line using "{register}p, then yank the revised text into the register using 0"{register}y$ example 0"ay$

vim tricks for working with SQL or JAVA, etc.
how to edit SQL quickly:
search fwd and back for '()[]{}"; etc. use %
fxtx ;,
like the f(;;;; or t(....
/? and nN
cGn change word, repeat with .
*# search for word under cursor, g* g# for partial matches
nG goes to line
ngj ngk goes n lines up or down
:set number
:%s/old/new/gc
:split notes.txt and ctrl+w for dual windows
shift } go to next empty line
shift v } to select text to next empty line
CMD ] or [ toggles between windows, while CTRL ww toggles between split screens

copy all to clipboard
ggVG then "*y
