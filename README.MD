This is the input mask for the personnel deployment planning of one person on one day. 
The user enters a valid workplace name, the start time and end time of a shift and a comment. The comment is optional or mandatory, depending on the workplace. The planned person can have one or more shifts in one day, e.g. 10:00-13:00, then a break and from 14:00 to 20:00. 

For the simplification there is no backend, no API, all data you need for this task is stored in variables defined in the code. 

The code uses the Classic toolkit of ExtJs 6.5.3.   

Your task is to implement the following requirements:

1. For workplaces K1, K2, AE, MK0, MK1, DE, a comment longer than 10 characters must be entered, otherwise the field should be displayed as incorrect. 

2. In addition to the mandatory text entry for a personnel assignment at workplaces MK0, DE, MK1, comments must be selected from a selection list with predefined texts. No free text entry for these workplaces! 
Depending on the workplace, either a input field with free text input or a drop-down list with predefined texts should appear. 

3. Optional: What would you change in or add to the given code?

Predefined texts for the workplaces:

MK0:
- "Play Mortal Kombat"
- "Do not play Mortal Kombat"
- "Organize tournament"
- "Practice fatalities"
- "Clean gaming equipment"
  
DE:
- "Dodge flying eggs"
- "Throw eggs at the people walking by"
- "Prepare egg-cellent puns"
- "Count unbroken eggs"
- "Design protective gear"
  
MK1:
- "Complete project report"
- "Review team performance"
- "Brainstorm new ideas"
- "Update project timeline"
- "Conduct team building exercise"