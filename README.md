## Link to screnshots (Goodle Drive)
# DB content and result screenshots of getTargetCashiers1 + getTargetCashiers2 + getAllCashires
# https://drive.google.com/drive/folders/1MoE77kk3iR5Ja3kQjOtGdRSZmtaayzqR?usp=sharing

## Any instructions, comments or important thoughts in scope of project

I made 2 tables of current cashires and former cashires, as in my opinion the former staff is not very relevant information,
so such information will rarely be used, so i divided the cashiers into current and former.

# About field worksInShifts

There I keep a string in which each cashier keeps a value in the format
"day of the week - duration of time, day of the week - duration of time ...",
because in the context of the task i think that will be enough, but ideally I would make a separate table that would hold the types of works shifts as constants, namely field day and field duration, and then to each cashier I would give an array of these works shifts.
