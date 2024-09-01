# Ministry of Futility Plot

## Primary Locations

These are the primary locations in the Ministry of Futility where the protagonist will navigate through the bureaucratic maze. They represent different aspects of the bureaucratic system and the challenges faced by the protagonist.

### Entrance

The entrance to the Ministry of Futility is a towering monolith of gray concrete and tinted glass, designed to intimidate and confuse visitors. The brutalist architecture features sharp angles and imposing columns that seem to defy both gravity and logic. The massive doors are unnecessarily heavy, requiring significant effort to open, symbolising the difficulty of navigating bureaucracy.

### Lobby

Upon entering, visitors find themselves in a cavernous lobby with impossibly high ceilings that seem to disappear into shadows. The space is sparsely furnished with uncomfortable-looking chairs arranged in perfectly straight lines. The walls are adorned with portraits of stern-faced bureaucrats and incomprehensible flowcharts. The lighting is a harsh fluorescent that flickers occasionally, creating an unsettling atmosphere.

### Reception

The reception area features a long, curved desk made of polished but cheap-looking laminate. Behind it sits a bored-looking receptionist, dwarfed by stacks of papers and outdated computer equipment. The area is lit by a combination of harsh overhead lights and dim desk lamps, creating an uneven and disorienting illumination.

### Office of Redundant Redundancies

This office is a maze of identical cubicles, each one a perfect copy of the last. The walls are a pale, forgettable beige, and the carpet is a muted gray that seems to absorb both light and sound. The air is filled with the constant hum of computers and the rhythmic sound of stamps hitting paper. The fluorescent lighting buzzes incessantly, adding to the monotonous atmosphere.

### Department of Circular Logic

The Department of Circular Logic is designed as a perfect circle, with corridors that lead back to where they started. The walls are covered in mirrors, creating an infinite reflection of confusion. Desks are arranged in concentric circles, each facing a different direction. The lighting changes subtly as you move through the space, making it difficult to maintain a sense of direction or time.

### Bureau of Counterproductive Measures

This bureau is intentionally designed to hinder productivity. The chairs are slightly too high for the desks, the desks are angled just enough to make writing uncomfortable, and the computers are positioned to cause neck strain. The room is overly warm, with no visible thermostats. The windows offer a view of a brick wall just a few feet away.

### Ministry Basement

The hidden underbelly of the Ministry, where the Human-Centered Design Underground operates. It’s a place of secrecy and quiet rebellion, far from the prying eyes of the official Ministry. More generally it is a labyrinth of dimly lit corridors and forgotten storage rooms. The air is musty, and the walls are lined with filing cabinets that haven't been opened in decades. Exposed pipes run along the ceiling, occasionally dripping water into strategically placed buckets. The flickering fluorescent lights cast long shadows, creating an eerie atmosphere.

### Meeting Room

The meeting room is a sterile space with uncomfortable chairs arranged around an unnecessarily large table. The walls are bare except for a whiteboard covered in incomprehensible diagrams. A projector hangs from the ceiling, perpetually out of focus. The room is always slightly too cold, encouraging shorter meetings (which ironically never happen).

### Work Cubicle

The protagonist’s personal workspace, a small, confined area where they often reflect on the futility of their tasks. The work cubicle represents the isolation and monotony of life within the Ministry. The typical work cubicle is a claustrophobic space with high walls that block out natural light but do nothing to muffle the sounds of neighboring colleagues. The desk is cluttered with outdated office equipment and stacks of papers. A small, wilting plant sits in the corner, a futile attempt at personalising the space and adding some warmth and life.

### Bureaucratic Labyrinth

Description: An abstract location representing the confusing and endless nature of the bureaucratic system. It’s a maze of corridors and dead ends, symbolising the protagonist’s struggle to find purpose in a system designed to prevent it. This abstract location manifests as an endless series of identical corridors, each leading to more corridors. The walls are lined with doors, most of which are locked or lead to nowhere. The lighting is inconsistent, with some areas brightly lit and others in near darkness. The floor is an optical illusion pattern that seems to shift under your feet.

### Ministry Cafeteria

A bleak and uninspiring cafeteria where employees gather to eat tasteless food and engage in meaningless small talk. The cafeteria is a place of forced social interaction and superficial camaraderie. It is a large, echo-filled room with long tables and uncomfortable plastic chairs. The walls are a sickly shade of green, allegedly chosen to suppress appetite. The food counter offers a variety of unidentifiable dishes, all in shades of beige and gray. Vending machines line one wall, perpetually out of order or stocked with expired snacks.

### Ministry Garden

A neglected and overgrown garden within the Ministry, a stark contrast to the sterile interior. The garden is a place of quiet reflection and escape from the suffocating bureaucracy of the building. The garden is a small, overgrown patch of green. Weeds grow between cracked paving stones, and a rusted bench sits beneath a gnarled old tree. Despite its neglected state, it offers a rare glimpse of nature and a moment of respite from the oppressive bureaucracy inside. The Ministry mythology has it that the garden has a speaking gnome statue that offers cryptic advice for those willing to listen. And at certain hard to predict lunar phases woo woo mushrooms are in season.

### Department of Existential Dread

A department dedicated to questioning the purpose of work and existence. Employees here grapple with the futility of their tasks and the meaninglessness of their roles. It’s a place of deep contemplation and despair. This department is located in a windowless room with low ceilings and dim, flickering lights. The walls are painted a deep, oppressive gray. Motivational posters with nihilistic messages hang crookedly on the walls. The furniture is mismatched and uncomfortable, designed to induce physical discomfort to match the mental anguish of existential contemplation.

...

---

# PLOT_START

## Start
title: ;Your arrival at the Ministry of Futility;
location: ;Ministry Entrance;
scene description: ;You arrive at the entrance of the Ministry of Futility for your first day of work. The building looms before you, a monument to the brutalism of bureaucracy. You pause, take a deep breath, and step inside through the imposing doors.;
context: ;The lobby is vast and disorienting, with harsh lighting and a sense of unease. You see a reception desk in the distance and corridors leading off in different directions. The air is filled with the sound of shuffling papers and the distant hum of computers.;

Choices:
- Enter the lobby: Lobby; increaseWisdom

## Lobby
title: ;The lobby of the Ministry of Futility;
location: ;Ministry Lobby;
scene description: ;You now stand in the lobby, surrounded by the oppressive atmosphere of bureaucracy. The reception desk is ahead, and corridors lead off in different directions.;
context: ;You slowly move toward the bored-looking receptionist that is sitting behind a desk, barely acknowledging your presence. There are three corridors leading off in different directions, each labeled with a sign.;

Choices:
- Approach the receptionist: Reception
- Take the corridor labeled Department of Circular Logic: Circular Logic; increaseWisdom
- Take the corridor labeled Bureau of Counterproductive Measures: Counterproductive Measures; increaseFutility
- Take the corridor labeled Office of Redundant Redundancies: Redundant Redundancies; increaseWisdom

## Reception
title: ;The reception desk;
location: ;Ministry Reception;
scene description: ;You approach the reception desk, where a bored-looking receptionist is typing away at a computer. The desk is cluttered with papers and outdated office supplies.;
context: ;The receptionist glances up at you with a look of mild annoyance. "Can I help you?" they ask, their tone conveying a sense of indifference.;

Choices:
- Ask about your job assignment: Job Assignment; increaseWisdom
- Ask for directions: Directions; increaseFutility
- Leave the reception desk: Lobby; increaseFutility

## Job Assignment
title: ;The receptionist's response;
location: ;Ministry Reception;
scene description: ;The receptionist looks up from their computer, a faint glimmer of interest in their eyes. They seem almost surprised that you're asking about your job assignment.;
context: ;"Job assignment?" the receptionist sighs. You'll need to fill out Form 27B/6 in triplicate, get it stamped by the Department of Human Resourcing Resources, countersigned by the Vice Deputy Assistant to the Assistant Deputy Vice Minister, and then bring it back here so I can stamp it with the seal of futility.";

Choices:
- Fill out Form 27B/6: Form Filling; increaseFutility
- Ask for directions to the Department of Human Resourcing Resources: Directions; increaseWisdom
- Give up and explore on your own: Lobby; increaseFuility

## Directions
title: ;Map to nowhere;
location: ;Ministry Reception;
scene description: ;You ask the receptionist for directions to the Department of Human Resourcing Resources.;
context: ;The receptionist hands you a map that appears to be for an entirely different building. "Good luck," they say, turning back to their computer.;

Choices:
- Return to the lobby: Lobby; increaseFutility
- Quit your job: None; quitGame

## Form Filling
title: ;The dreaded Form 27B/6;
location: ;Ministry Reception;
scene description: ;You sit down at a small table and begin filling out Form 27B/6. A maze of checkboxes and obscure questions that seem to have no relevance to your job. The instructions are written in a tiny font at the bottom of the page.;
context: ;You spend what feels like hours filling out Form 27B/6. Just as you finish the third copy, you realise you've been using the wrong color ink, which is pretty darn annoying because it only states this instruction at the end of the form.;

Choices:
- Start over: Form Filling Again; increaseFutility
- Ask for help: Help Request; increaseWisdom, decreaseFutility
- Give up and explore on your own: Lobby; increaseFutility, increaseWisdom

## Form Filling Again
title: ;The dreaded Form 27B/6 (again);
location: ;Ministry Reception;
scene description: ;You start over with Form 27B/6, this time using the correct color ink.;
context: ;It's quicker the second time aroung but it still feels like hours going through Form 27B/6. You get it stamped by the Department of Human Resourcing Resources, countersigned by the Vice Deputy Assistant to the Assistant Deputy Vice Minister, and then bring it back to the receptionist.;

Choices:
- Return to the reception desk: Reception With Form; increaseWisdom
- Give up and explore on your own: Lobby; increaseFutility

## Reception With Form
title: ;The receptionist's response (again);
location: ;Ministry Reception;
scene description: ;You return to the reception desk with Form 27B/6 in triplicate, hoping you've finally completed the task correctly.;
context: ;The receptionist looks at your forms and shakes their head. "You filled out the wrong form. We have a new version now that better aligns with the workplace rules defined by the Deputy Vice Chair of the Committee of Workplace Relations. You need Form 27B/6A, not Form 27B/6. You'll have to start over.";

Choices:
- Fill out the correct form: Form Filling 6a ; increaseFutility
- Ask for directions to the Department of Human Resourcing Resources: Directions; increaseWisdom
- Give up and explore on your own: Lobby; increaseFutility
- Tell the receptionist you quit: None; quitGame

## Form Filling 6a
title: ;The dreaded Form 27B/6A;
location: ;Ministry Reception;
scene description: ;You sit down at a small table and begin filling out Form 27B/6A. The questions are even more obscure than the previous form, and the instructions are written in an even smaller font.;
context: ;You start over with Form 27B/6A, the new and improved version. This time, you make sure to use the correct color ink and fill out all three copies with precision. You get it stamped by the Department of Human Resourcing Resources, countersigned by the Vice Deputy Assistant to the Assistant Deputy Vice Minister, and then bring it back to the receptionist.;

Choices:
- Return to the reception desk: Reception With Form 6a; increaseWisdom
- Rip up the form and leave: None; quitGame

## Reception With Form 6a
title: ;The receptionist's response (again);
location: ;Ministry Reception;
scene description: ;You return to the reception desk with Form 27B/6A in triplicate, hoping you've finally completed the task correctly.;
context: ;The receptionist looks at your forms and nods approvingly. "Finally, you've got it right. Now, you just need to get it stamped by the Deputy Vice Chair of the Committee of Workplace Relations. They're in the basement, down the hall, through the door marked 'Authorised Personnel Only.' Good luck.";

Choices:
- Head to the basement to find the Deputy Vice Chair: Basement; increaseWisdom
- Give up now: None; quitGame

## Circular Logic
title: ;The Department of Circular Logic;
location: ;Department of Circular Logic;
scene description: ;You enter the Department of Circular Logic, a maze of circular corridors and mirrored walls. The lighting changes subtly as you move through the space, making it difficult to maintain a sense of direction or time.;
context: ;An employee approaches you. "Welcome! Before I can tell you what we do here, you'll need to explain to me what you think we actually do here.";

Choices:
- Try to explain: Circular Explanation; increaseFutility
- Admit you don't know: Circular Confusion; increaseWisdom
- Leave the department: Lobby; increaseFutility

## Circular Explanation
title: ;Purpose obfuscation;
location: ;Department of Circular Logic;
scene description: ;You attempt to explain what you think the Department of Circular Logic does.;
context: ;You make a wild guess about the department's purpose. The employee nods enthusiastically. "Exactly! But now that you know what we do, you can't work here. We only employ people who don't really know what we do, or at the least, pretend they don't.";

Choices:
- Leave in frustration: Lobby; increaseFutility
- Admit you don't know: Circular Confusion; increaseWisdom

## Circular Confusion
title: ;The paradox of purpose;
location: ;Department of Circular Logic;
scene description: ;You admit that you don't know what the Department of Circular Logic does.;
context: ;"Perfect!" the senior looking bureacrat exclaims. "You're hired! Your job is to find out what we do here, but remember, once you know, you'll be fired.";

Choices:
- Accept the job: Circular Job; increaseFutility
- Refuse and leave: Lobby; decreaseFutility, increaseWisdom

## Circular Job
title: ;The endless cycle;
location: ;Department of Circular Logic;
scene description: ;Congratulations! You're now an employee of the Department of Circular Logic, tasked with finding out what the department actually does without revealing it. The corridors seem to shift and change as you walk through them, making it impossible to find your way back to wherever it is you've come from.;
context: ;You've been promoted to Senior Analyst of Purpose Obfuscation. Your first task is to write a report explaining why your job is necessary without revealing what your job actually is in any meaningful detail.;

Choices:
- Write the report: Report Writing; decreaseWisdom
- Quit in frustration: None; quitGame
- Ask for clarification: Circular Confusion Again; increaseWisdom

## Circular Confusion Again
title: ;Bureaucratic Groundhog Day;
location: ;Department of Circular Logic;
scene description: ;You ask for clarification on your job duties, hoping for some semblance of coherence.;
context: ;"Ah, you've discovered the paradox!" the senior bureaucrat exclaims. "You're promoted to Assistant to the Deputy Vice Chair of Circular Logic. Your job is to ensure that nobody ever figures out what we do here and why we actually have such an oversized budget. Good luck!";

Choices:
- Accept the promotion: Circular Job Promotion; increaseFutility
- Refuse and leave: Lobby; increaseFutility, decreaseWisdom

## Circular Job Promotion
title: ;The cycle continues;
location: ;Department of Circular Logic;
scene description: ;You've been promoted to Assistant to the Deputy Vice Chair of Circular Logic, a position of great responsibility and even greater confusion.;
context: ;Your days are filled with meetings about meetings and reports about reports, all leading to no discernible outcome. You pause for a moment to contemplate the futility of your existence here with the Ministry.;

Choices:
- Continue your career in circular logic: Circular Logic Entropy; increaseFutility
- Question your life choices: Existential Crisis; increaseFutility
- Visit the Basement to contemplate: Basement First Timer; increaseWisdom
- Go to the Ministry garden to contemplate: Ministry Garden; increaseWisdom

## Circular Logic Entropy
title: ;The entropy of purpose;
location: ;Department of Circular Logic;
scene description: ;You've become an integral part of the Department of Circular Logic, perpetuating the cycle of confusion and obfuscation.;
context: ;You've reached a pinnacle. Your reports are now so convoluted that even you can't understand them. The department is thrilled with your work. You're offered a promotion to Director of Purposeful Confusion.;

Choices:
- Accept the promotion: Circular Logic Success; increaseFutility
- Question the meaning of it all: Existential Crisis; increaseFutility
- Go to the ministry garden to contemplate: Ministry Garden; increaseWisdom

## Circular Logic Success
title: ;The art of obfuscation;
location: ;Department of Circular Logic;
scene description: ;You've mastered the art of circular logic, becoming the gold standard of bureaucratic obfuscation. Your reports are now considered the pinnacle of meaningless complexity.;
context: ;You're offered a promotion to Assistant to the Director of Circular Logic, overseeing all circular departments in the Ministry.;

Choices:
- Write a memoir about your journey: Book Writing; decreaseWisdom
- Accept your promotion: Assistant to the Director of Circular Logic; decreaseWisdom
- Visit the Basement to contemplate: Basement First Timer; increaseWisdom

## Assistant to the Director of Circular Logic
title: ;Entrenching circular logic;
location: ;Department of Circular Logic;
scene description: ;You continue on your journey of futility, entreching the absurdity of circular logic throughout the Ministry.;
context: ;You ponder if this has been what you'd actually thought the public service would be like.;

Choices:
- Go to the garden to contemplate: Ministry Garden; increaseWisdom
- Write a memoir about your journey: Book Writing; decreaseWisdom
- Question the meaning of it all: Existential Crisis; increaseFutility

## Report Writing
title: ;The report to nowhere;
location: ;Department of Circular Logic;
scene description: ;You sit down to write the report on the necessity of your job without revealing what your job actually is. The words flow easily, but adding real substance to the content remains elusive.;
context: ;After hours of writing, you produce a 41-page report that says absolutely nothing of substance. Your supervisor is delighted and immediately shreds the document.;

Choices:
- Continue working: Circular Job Again; increaseFutility
- Quit in frustration: None; quitGame
- Question your life choices: Existential Crisis; increaseFutility

## Circular Job Again
title: ;The cycle continues;
location: ;Department of Circular Logic;
scene description: ;You're assigned to write another report, this time on the importance of circular logic in the Ministry and the public service in general. The report is due by the end of the day, and it must be at least 42 pages long.;
context: ;You pause for a moment, contemplating the futility of your task. The cycle of circular logic continues, and you're caught in its endless loop.;

Choices:
- Write the report: Report Writing Take Two; decreaseWisdom
- Go to the Ministry garden to contemplate: Ministry Garden; increaseWisdom
- Quit in frustration: None; quitGame

## Report Writing Take Two
title: ;The never-ending cycle;
location: ;Department of Circular Logic;
scene description: ;You sit down to write the report on the importance of circular logic. The words flow easily, but the substance of the content still remains elusive.;
context: ;You spend the entire day writing a 42-page report on the importance of circular logic in the workplace. Just as you finish, your supervisor informs you that the report is now obsolete and needs to be rewritten from scratch.;

Choices:
- Start over: Report Writing Guru; decreaseWisdom
- Question your life choices: Existential Crisis; increaseFutility
- Go to the Ministry garden to contemplate: Ministry Garden; increaseWisdom

## Report Writing Guru
title: ;The master of circular reports;
location: ;Department of Circular Logic;
scene description: ;You've become a master of circular logic and meaningless report writing. Your reports are now considered the gold standard of bureaucratic obfuscation.;
context: ;You've been offered a promotion to Minister of Circular Logic, overseeing all circular departments in the Ministry.;

Choices:
- Accept the promotion: Circular Logic Success; increaseFutility
- Question the meaning of it all: Existential Crisis; increaseFutility
- Go to the ministry garden to contemplate: Ministry Garden; increaseWisdom

## Ministry Garden
title: ;The garden of contemplation;
location: ;Ministry Garden;
scene description: ;You step outside into the neglected garden of the Ministry, a stark contrast to the sterile interior. A place of quiet reflection and escape from the oppressive bureaucracy inside.;
context: ;You stroll around the unkempt garden and decide to sit on the grass. The sun filters through the leaves of the gnarled old tree, casting dappled shadows on the ground. You feel a sense of peace and clarity that is rare in the Ministry.;

Choices:
- Go to the basement to contemplate further: Basement First Timer; increaseWisdom
- Question the meaning of it all: Existential Crisis; increaseFutility

## Counterproductive Measures
title: ;The Bureau of Counterproductive Measures;
location: ;Bureau of Counterproductive Measures;
scene description: ;You enter the Bureau of Counterproductive Measures, a room designed to hinder productivity. The chairs are slightly too high for the desks, the desks are angled just enough to make writing uncomfortable, and the computers are positioned to cause neck strain.;
context: ;You enter the Bureau of Counterproductive Measures. A frazzled-looking manager runs up to you. "Thank goodness you're here! We need your help with Operation Clarity.";

Choices:
- Ask about Operation Clarity: Operation Clarity; increaseWisdom
- Offer to help immediately: Counterproductive Help; increaseWisdom, decreaseFutility
- Back away slowly: Lobby; increaseFutility, decreaseWisdom

## Operation Clarity
title: ;In pursuit of clarity?;
location: ;Bureau of Counterproductive Measures;
scene description: ;The manager explains, "Operation Clarity is our new public comms initiative. The goal, make all public communications as clear as possible from the Ministry";
context: ;You're tasked with making sure that all communications from your department are as clear as possible, while also ensuring that they are completely misaligned with communications from other departments. The challenge is daunting, but you're determined to make it work.;

Choices:
- Offer to help: Counterproductive Help; increaseWisdom, decreaseFutility
- Suggest making communications aligned across all government departments: Clarity Suggestion; increaseFutility
- Leave the bureau: Lobby; increaseFutility

## Counterproductive Help
title: ;The subtle art of unhelpfulness;
location: ;Bureau of Counterproductive Measures;
scene description: ;You offer to help with Operation Clarity, diving into the task with enthusiasm. The manager looks relieved and hands you another stack of memos to rewrite.;
context: ;You spend the day rewriting memos and adding unnecessary jargon due to your superiors incessent input. A wonderfully wordsmithed composition of convoluted sentences and layers of contradictory statements. Your colleagues are delighted with your work.;

Choices:
- Continue working: Counterproductive Success; increaseWisdom, decreaseFutility
- Question your life choices: Existential Crisis; increaseFutility

## Clarity Suggestion
title: ;A dangerous idea;
location: ;Bureau of Counterproductive Measures;
scene description: ;You work to making communications aligned across all government departments, a radical idea in the Ministry of Futility.;
context: ;You write a practical and poingant proposal to streamline comms and desilo coordination and collaboration between departments. The entire leadership team gasps in horror. "Clear communication? That's... that's... counterproductive!" You're immediately promoted to Chief Confusion Coordinator for your brilliant counterproductive thinking.;

Choices:
- Accept the promotion: Counterproductive Success; decreaseWisdom, increaseFutility
- Question your life choices: Existential Crisis; increaseFutility
- Refuse and leave: Lobby; increaseFutility

## Counterproductive Success
title: ;Mastering the art of confusion;
location: ;Bureau of Counterproductive Measures;
scene description: ;You've become a master of counterproductive measures, making communications as confusing as possible. Your work is hailed as a triumph of bureaucratic obfuscation.;
context: ;You're now ready to make government communication even more confusing. You get to work, following the lead of your superiors. Citizens everywhere are now completely baffled by even the simplest public announcements.;

Choices:
- Continue your career in counterproductive measures: Advancing Confusion; increaseFutility
- Consider a transfer to another department: Departmental Transfer; increaseFutility
- Go to the Ministry garden to contemplate: Ministry Garden; increaseWisdom

## Advancing Confusion
title: ;The legacy of confusion;
location: ;Bureau of Counterproductive Measures;
scene description: ;Your work has made the Ministry's communications the most confusing in the nation. You're promoted to Director of Miscommunication and awarded the Order of Bureaucratic Confusion.;
context: ;You're hailed as a visionary in the field of counterproductive measures. Your work has made the Ministry a model department in the Government.;

Choices:
- Accept the award: Confusion Award; decreaseWisdom
- Question the meaning of it all: Existential Crisis; increaseFutility
- Go to the basement to contemplate: Basement First Timer; increaseWisdom

## Confusion Award
title: ;The pinnacle of confusion;
location: ;Bureau of Counterproductive Measures;
scene description: ;You accept the Order of Bureaucratic Confusion, a plaque that reads, "For outstanding achievement in the field of miscommunication." You hang it proudly in your office, where nobody can read it due to the poor choice on font size and just general bad design.;
context: ;Your work has made the Ministry a model of confusion and inefficiency. You're offered a promotion to Minister of Miscommunication, overseeing all communications in the public service.;

Choices:
- Accept the promotion: Minister Ending; decreaseWisdom
- Question the meaning of it all: Existential Crisis; increaseFutility
- Join the underground movement to improve things at the Ministry: Join Underground Movement; increaseWisdom, decreaseFutility
- Review your memoirs and prepare for quiet quitting: Garden Memoir Review; increaseWisdom

## Departmental Transfer
title: ;A fresh start?;
location: ;Bureau of Counterproductive Measures;
scene description: ;You consider a transfer to another department, hoping for a fresh start away from the counterproductive measures of the Bureau.;
context: ;You request a transfer to the the woo woo Department of Human-Centered Design. Your request is denied, and you're instead transferred to the Department of Existential Dread.;

Choices:
- Accept the transfer: Existential Crisis; increaseFutility
- Appeal the decision: Appeals Tribunal; increaseFutility
- Quit in frustration: None; quitGame

## Appeals Tribunal
title: ;The tribunal of futility;
location: ;Bureau of Counterproductive Measures;
scene description: ;You appeal the decision to transfer you to the Department of Existential Dread, hoping for a different outcome.;
context: ;Your appeal is denied by the Tribunal of Futility. They inform you that the decision is final, resitance is futile and that you're now officially a member of the Department of Existential Dread.;

Choices:
- Accept your fate: Existential Crisis; increaseFutility
- Refuse and leave: None; quitGame
- Work in secret to undermine the system: Join Underground Movement; increaseWisdom, decreaseFutility

## Join Underground Movement
title: ;The underground movement;
location: ;Bureau of Counterproductive Measures;
scene description: ;You join the Human-Centered Design Underground, a secret group dedicated to bringing real human-centered design principles to the Ministry.;
context: ;Your first ritual of initiation is to organise a design thinking workshop in the basement.;

Choices:
- Organise the workshop: Workshop Planning; decreaseFutility, increaseWisdom
- Go to your cubicle to contemplate the risks of your actions: Cubicle Risk Assessment; increaseFutility, decreaseWisdom
- Question your life choices: Existential Crisis; increaseFutility

## Cubicle Risk Assessment
title: ;The risks of rebellion;
location: ;Work Cubicle;
scene description: ;You sit in your cubicle, contemplating the risks of joining the underground movement. The consequences of your actions weigh heavily on your mind. You wonder if the potential rewards are worth the risks.;
context: ;You consider the potential consequences of organising the design thinking workshop in the basement. The Ministry is known for its harsh punishments for those who challenge the status quo.;

Choices:
- Proceed with the workshop: Workshop Planning; decreaseFutility, increaseWisdom
- Continue to question your life choices: Existential Crisis; increaseFutility
- Go to the Ministry garden to contemplate: Ministry Garden; increaseWisdom

## Underground Impact
title: ;The Legacy of the Underground Movement;
location: ;Bureau of Counterproductive Measures;
scene description: ;Months go by but you are not really sure if the human-centered design underground movement has had any impact on the Ministry. You wonder if your efforts have been in vain. The whispers of change are faint and fleeting. But hey at least you've been promoted to Minister of Human-Centered Design. Right?;
context: ;You reflect on the impact of the underground movement and question it's true positive impact on the world.; 

Choices:
- Reflect on your journey: Garden Memoir Review; increaseWisdom
- Accept a promotion to Minister of Human-Centered Design: Minister Ending; decreaseWisdom
- Go to the Ministry garden to contemplate: Ministry Garden; increaseWisdom

## Workshop Planning
title: ;The workshop of change;
location: ;Basement;
scene description: ;You come down to the basement and find a quiet spot in a corner to plan your workshop.;
context: ;You sit down to plan the design thinking workshop. The agenda is set, the materials are prepared, and the participants are invited. There's chatter in the underground movement about the potential impact of your workshop.;

Choices:
- Proceed with the workshop: Workshop Success; decreaseFutility, increaseWisdom
- Explore the basement for hidden secrets: Basement; increaseWisdom
- Question your life choices: Existential Crisis; increaseFutility

## Basement
title: ;The secrets of the basement;
location: ;Ministry Basement;
scene description: ;You venture into the basement, where you discover a hidden archive of forgotten projects and abandoned initiatives. Among the dust and cobwebs, you find a folder labeled "Project: Meaningful Change.";
context: ;You're drawn to the folder and wonder what secrets it holds. The basement is a place of mystery and intrigue, a stark contrast to the sterile corridors of the Ministry.;

Choices:
- Investigate the folder: Meaningful Change; increaseWisdom
- Proceed with the workshop: Workshop Success; decreaseFutility, increaseWisdom
- Try to find the Deputy Vice Chair of the Committee of Workplace Relations: Basement Search; increaseFutility

## Basement First Timer
title: ;The basement of contemplation;
location: ;Ministry Basement;
scene description: ;You descend into the basement for the first time, feeling a sense of unease. The dimly lit corridors stretch out before you, filled with the echoes of forgotten projects and abandoned initiatives. You hear chatter in the distance and wonder what secrets lie hidden in the shadows.;
context: ;You take a deep breath and walk towards the sound of voices.;

Choices:
- Find out what's happening: Basement Investigation; increaseWisdom
- Return to your cubicle: Work Cubicle; increaseFutility
- Acsend to the garden and review your memoirs: Garden Memoir Review; increaseWisdom

## Basement Investigation
title: ;The hidden truth;
location: ;Ministry Basement;
scene description: ;You follow the sound of chatter to a hidden room in the basement. Inside, you find a group of empassioned employees discussing a secret project to bring real change to the Ministry and the broader public service. They invite you to join them.;
context: ;You're intrigued. You engae in deep conversation with the group, learning about their vision for a more human-centered and meaningful Ministry. You're inspired by their passion and dedication.;

Choices:
- Join the underground movement: Join Underground Movement; increaseWisdom, decreaseFutility
- Return to your cubicle: Work Cubicle; increaseFutility
- Acsend to the garden: Ministry Garden; increaseWisdom

## Work Cubicle
title: ;The confines of monotony;
location: ;Work Cubicle;
scene description: ;You return to your cubicle, feeling the weight of the bureaucracy pressing down on you. The hum of the fluorescent lights and the clatter of keyboards surround you. You wonder if there's more to life than this endless cycle of meaningless tasks.;
context: ;You sit at your desk, staring at the blank screen of your computer. The minutes tick by, and you feel a sense of futility creeping in.;

Choices:
- Request a transfer to another department: Departmental Transfer; increaseFutility
- Review your memoirs in the garden: Garden Memoir Review; increaseWisdom

## Basement Search
title: ;The search for the Deputy Vice Chair;
location: ;Ministry Basement;
scene description: ;You need your form 27B/6A search the basement for the Deputy Vice Chair of the Committee of Workplace Relations. After hours of wandering through the labyrinthine corridors, you stumble upon a locked door with a sign that reads, "Authorised Personnel Only.";
context: ;You wonder what secrets lie behind the door and if the Deputy Vice Chair is hiding in the shadows. The basement is a place of mystery and intrigue, and you're determined to find the truth.;

Choices:
- Try to open the door: Door Opening; increaseFutility
- Go back to the folder: Meaningful Change; increaseWisdom

## Door Opening
title: ;The forbidden door;
location: ;Ministry Basement;
scene description: ;You try to open the locked door, but it's sealed shut. You try to force it open, but it won't budge. You hear footsteps approaching from the other side.;
context: ;A security guard appears and asks for your credentials. You don't have any, and argue that you're authorised personnel and were sent to find the Deputy Vice Chair of the Committee of Workplace Relations. The guard looks at you with suspicion.;

Choices:
- Try to convince the guard: Guard Convince; increaseFutility
- Return to the folder: Meaningful Change; increaseWisdom

## Guard Convince
title: ;The failed persuasion;
location: ;Ministry Basement;
scene description: ;You try to convince the guard that you're authorised personnel and need to find the Deputy Vice Chair of the Committee of Workplace Relations. The guard remains unconvinced.;
context: ;The guard shakes their head and escorts you out of the area. You're left standing in the one of the basement corridors, wondering what secrets lie behind the locked door.;

Choices:
- Return to the folder: Meaningful Change; increaseWisdom
- Return to the lobby to figure out WTF you're doing here: Lobby; increaseFutility

## Meaningful Change
title: ;The pursuit of purpose;
location: ;Ministry Basement;
scene description: ;You open the folder and discover a proposal for transforming the Ministry into a beacon of meaningful change. The project was abandoned years ago due to lack of interest and funding. You're inspired to revive the initiative and bring real change to the Ministry.;
context: ;You're filled with a sense of purpose and determination. You decide to talk to the underground movement about the proposal and see if they're interested in collaborating.;

Choices:
- Take the proposal to the committee of institutional change: Committee Proposal; increaseWisdom
- Bring the proposal to the underground movement: Underground Movement; increaseWisdom
- Give up and return to your cubicle: Work Cubicle; increaseFutility

## Committee Proposal
title: ;The proposal for change;
scene description: ;You present the proposal for meaningful change to the committee of institutional change. The members listen intently, their expressions shifting from skepticism to curiosity. The proposal is met with cautious optimism, and the committee agrees to fund the initiative.;
context: ;You're hailed as a visionary in the Ministry, a champion of meaningful change. Your proposal is approved, and you're given the resources to bring your vision to life.;

Choices:
- Proceed with the initiative: Workshop Success; decreaseFutility, increaseWisdom
- Go to the Ministry garden to contemplate: Ministry Garden; increaseWisdom
- Question your life choices: Existential Crisis; increaseFutility

## Workshop Success
title: ;The dawn of a new era;
location: ;Basement;
scene description: ;The design thinking workshop is a resounding success, inspiring participants to think differently about their work and the Ministry. The movement gains momentum, and your efforts are recognised by the Ministry.;
context: ;You're hailed as a visionary in the Ministry, your work has inspired a new way of thinking and working. You're offered a promotion to Deputy Minister of Human-Centered Design, overseeing all design initiatives in the public service.;

Choices:
- Accept the promotion: Human Centred Design Success; increaseFutility, decreaseWisdom
- Question the meaning of it all: Existential Crisis; increaseFutility
- Head to the garden to review your memoirs: Garden Memoir Review; increaseWisdom

## Human Centred Design Success
title: ;The rise of human-centered design;
location: ;Department of Human-Centered Design;
scene description: ;You've been promoted to Deputy Minister of Human-Centered Design, a position of great responsibility and potential. The Ministry is on the cusp of real change, and you're at the forefront of the movement.;
context: ;As Deputy Minister of Human-Centered Design, you lead the charge to bring real human-centered design principles to the Ministry. Your work transforms the way the Ministry operates, focusing on the needs of citizens and employees. You're hailed as a visionary leader in the public service.;

Choices:
- Continue your work in human-centered design: Human Centred Design Pinnacle; increaseWisdom
- Question the meaning of it all: Existential Crisis; increaseFutility
- Go to the Ministry garden to contemplate: Ministry Garden; increaseWisdom

## Human Centred Design Pinnacle
title: ;The legacy of human-centered design;
location: ;Department of Human-Centered Design;
scene description: ;Your work has revolutionised the Ministry, making it a model of human-centered designin the public service. You're promoted to Minister of Human-Centered Design, overseeing all design initiatives in the public service.;
context: ;You take some timepause and reflect honestly about your legacy. It becomes abundently clear it is actually one of meaningless change, lots of post-its and plenty of prototypes, design artifacts and workshops.;

Choices:
- Accept your role as Minister of Human-Centered Design: Minister Ending; decreaseWisdom
- Question the meaning of it all: Existential Crisis; increaseFutility
- Go to the Ministry garden to contemplate: Ministry Garden; increaseWisdom

## Existential Crisis
title: ;The futility of it all;
location: ;Ministry Hallway;
scene description: ;As you stroll the dreary hallways of the Ministry you're struck by a sudden sense of futility, questioning the purpose of your work and your life in general. The corridors of the Ministry seem to stretch on endlessly, a maze of bureaucracy and confusion.;
context: ;As you ponder the meaning of your work and your life in general, you're approached by a representative from the Department of Existential Dread. "You look like a perfect candidate for our team!";

Choices:
- Join the Department of Existential Dread: Existential Department; increaseFutility
- Flee the building: Wise End; None
- Go to the Ministry garden to contemplate: Ministry Garden; increaseWisdom

## Existential Department
title: ;The Department of Existential Dread;
location: ;Department of Existential Dread;
scene description: ;You enter the Department, stop and absorb the atmosphere. It is heavy with existential angst and bureaucratic despair. This is a place dedicated to questioning the purpose of your job and why it matters in the grand scheme of the universe. It's a paradox wrapped in an enigma, smothered in a thick layer of futility sauce. Delicious!;
context: ;A senior bureaucrat approaches you and says with a sardonic tone "Welcome to the Department of Existential Dread. Enjoy your stay!";

Choices:
- Embrace the existential dread: Dread Embracing; decreaseFutility, increaseWisdom
- Try to find meaning: Meaning Search; increaseFutility, increaseWisdom, increaseWoo

## Dread Embracing
title: ;Recursive despair;
location: ;Department of Existential Dread;
scene description: ;You embrace the existential dread of the Department, accepting the futility of your job and the seeming meaninglessness of your existence.;
context: ;You spend your days contemplating the futility of contemplating futility. Your productivity reports are entirely blank, which is edging you further on the leaderboards to make you the department's top performer.;

Choices:
- Continue your career in existential dread: Recursive Despair; increaseWisdom, decreaseFutility
- Seek transfer to a less philosophical department: Lobby; increaseFutility

## Existential Department Ending
title: ;The Final Embrace of Dread;
location: ;Department of Existential Dread;
scene description: ;You've almost fully embraced the existential dread of the Department, you're on the edge of a breakthrough, a moment of clarity that could change everything.;
context: ;After months of questioning the purpose of your job, you come to the final realisation: there is no purpose. Embracing this truth, you accept your role in the Department of Existential Dread fully. From now on, your days are filled with deep contemplation of futility, and your productivity reports are the envy of the entire Ministry—because they are completely blank.;

Choices:
- Contemplate your existence: Recursive Despair; increaseFutility, decreaseWisdom
- Seek a way out of the Department: Escape Attempt; increaseWisdom

## Recursive Despair
title: ;Endless Contemplation;
location: ;Department of Existential Dread;
scene description: ;You're lost in a sea of existential dread...;
context: ;You spend your days lost in thought. Contemplating the futility of your job, your personal life, and existence itself. The more you think about it, the more you realise that everything is meaningless. Your productivity reports are a blank canvas and reflection of the void within. A void you feel working in a hollowed out public service filled with consultants while your peers that actually care about human-centred public service delivery are wrapped in red tape and spend their days checking boxes and reviewing post-it notes from the last workshop.;

Choices:
- Continue your contemplation: Recursive Despair; increaseFutility, decreaseWisdom
- Seek a way out of the Department: Escape Attempt; increaseWisdom
- Go to the Ministry garden to contemplate: Ministry Garden; increaseWisdom

## Escape Attempt
title: ;Breaking Free;
location: ;Department of Existential Dread;
scene description: ;You've had enough of the Department of Existential Dread and its endless cycle of futility. You make a break for the exit, determined to find a way out of the Ministry.;
context: ;As you step out, a wave of clarity washes over you. The world outside may be just as absurd, but at least you’re free to find your own meaning. Right?;

Choices:
- Continue your journey: Lobby; increaseFutility, increaseWisdom
- Resign and leave the Ministry: None; quitGame

## Meaning Search
title: ;The quest for purpose;
location: ;Department of Existential Dread;
scene description: ;You embark on a quest to find meaning in the Department of Existential Dread. The journey is filled with bureaucratic obstacles and philosophical conundrums.;
context: ;Your attempts to find meaning are flagged as disruptive behavior. You're sentenced to attend a seminar on "Embracing Meaninglessness in the Workplace.";

Choices:
- Attend the seminar: Meaninglessness Seminar; increaseFutility, decreaseWisdom
- Rebel and search for a purpose: Purpose Quest; increaseWisdom, decreaseFutility

## Meaninglessness Seminar
title: ;Death by PowerPoint;
location: ;Department of Existential Dread;
scene description: ;You sit through a full day of PowerPoint presentations about the futility of finding meaning in the workplace. The slides are filled with bullet points and poorly chosen clip art and stock images, and the presenters drone on in monotone voices.;
context: ;You walk out of the seminar feeling oddly motivated to do nothing.;

Choices:
- Return to your department with renewed lack of purpose: Dread Embracing; increaseFutility, increaseWisdom
- Question everything and start a bureaucratic revolution: Revolution; increaseWisdom, increaseFutility
- Go to the Ministry garden to contemplate: Ministry Garden; increaseWisdom

## Purpose Quest
title: ;Labrynth of futility;
location: ;Department of Existential Dread;
scene description: ;You embark on a quest to find meaning in the Department of Existential Dread.;
context: ;Your quest for purpose leads you through a maze of departments, each more pointless than the last. Finally, you find yourself back where you started, having learned that the real purpose was embracing the futility you experienced along the way.;

Choices:
- Accept your fate and return to work: Recursive Despair; increaseFutility, increaseWisdom
- Go to the garden and review your memoirs: Garden Memoir Review; increaseWisdom

## Garden Memoir Review
title: ;Reviewing Your Memoirs;
location: ;Ministry Garden;
scene description: ;You sit in the garden, surrounded by the quiet beauty of nature contained within the uncurated garden. The sun filters through the leaves, casting dappled shadows on the ground.;
context: ;You take a moment to review your memoirs, reflecting on the journey that brought you to this point. These reflections capture the essence of your journey through the Ministry of Futility.;

Choices:
- Proceed to write your book: Book Writing; increaseWisdom
- Visit the Basement to contemplate: Basement First Timer; increaseWisdom
- Speak to the garden gnome: Gnome Wisdom; increaseWisdom, increaseWoo

## Gnome Wisdom
title: ;The wisdom of the gnome;
location: ;Ministry Garden;
scene description: ;You approach the garden gnome, a small statue nestled among the flowers and some sweetly scented mulch. It seems to radiate a sense of calm and wisdom.;
context: ; You imagine the gnome looking up at you with its unblinking eyes and saying to you... "Ah, another lost soul seeking guidance in this futile wilderness. What wisdom do you seek?";

Choices:
- Ask the gnome for advice: Gnome Advice; increaseWisdom, increaseWoo
- Return to your cubicle: Work Cubicle; increaseFutility

## Gnome Advice
title: ;The wisdom of the gnome;
location: ;Ministry Garden;
scene description: ;You sit down on the overgrown grass, hoping to gain some insight into your journey through the Ministry of Futility.;
context: ;You notice a slight glisting on the top of a mushroom growing from the mulch beside the gnome.;

Choices:
- Investigate the mushroom: Mushroom Investigation; increaseWisdom, increaseWoo
- Go back to your cubicle: Work Cubicle Psychadelia; increaseFutility

## Work Cubicle Psychadelia
title: ;The cubicle of confusion;
location: ;Work Cubicle;
scene description: ;You return to your cubicle, feeling the weight of the bureaucracy pressing down on you. The hum of the fluorescent lights and the clatter of keyboards surround you. You stare at the screen, wondering if the gnome was real or just a figment of your imagination.;

Choices:
- Return to the garden to explore the mushroom: Mushroom Investigation; increaseWisdom, increaseWoo
- Continue your work: Work Cubicle Existential Dread; increaseFutility
- Quit and choose a different life path; Wise End; increaseWisdom

## Work Cubicle Existential Dread
title: ;The cycle of futility;
location: ;Work Cubicle;
scene description: ;You sit at your desk, staring at the screen, post-it notes and the stench of bad coffee fills your nostrils.;
context: ;Your mind wanders and you reflect on the gnome's words...;

Choices:
- Return to the garden to explore the mushroom: Mushroom Investigation; increaseWisdom, increaseWoo
- Go on a sabbatical to find yourself: Sabbatical; increaseWisdom, decreaseFutility
- Quit and choose a different life path; Wise End; increaseWisdom

## Mushroom Investigation
title: ;The woo woo mushroom;
location: ;Ministry Garden;
scene description: ;You investigate the mushroom, which seems to be glowing with an otherworldly light. As you reach out to touch it, you feel a sense of calm and clarity wash over you.;
context: ;The gnome looks up at you with a knowing smile. "Ah, you've found the woo woo mushroom. It's said to grant wisdom to those who seek it. Are you prepared for the insights you seek?"... You are slightly perplexed... did the gnome actually said that? You think to yourself...am I hallucinating...?;

Choices:
- Pick the mushroom: Mushroom Picking; increaseWisdom, increaseWoo
- Return to your cubicle: Work Cubicle Woo Choice; increaseFutility
- Freak out and run away: End; increaseFutility, decreaseWisdom, decreaseWoo

## Work Cubicle Woo Choice
title: ;The return to futility;
location: ;Work Cubicle;
scene description: ;You return to your cubicle...;
context: ;You sit at your desk, staring at the screen, feeling the futility of your existence. The mushroom's glow fades from your mind, replaced by the harsh reality of the Ministry.;

Choices:
- Return to the garden to explore the mushroom: Mushroom Investigation Again; increaseWisdom, increaseWoo
- Continue your work: Work Cubicle Existential Dread; increaseFutility

## Work Cubicle Existential Dread
title: ;The cycle of futility;
location: ;Work Cubicle;
scene description: ;You sit at your desk, staring at the screen, post-it notes and half-empty coffee cups littering the desk.;
context: ;Your mind wanders and you reflect on what you experienced in the Ministry garden... like, what the fuck, a speaking gnome?;

Choices:
- Return to the garden to explore the mushroom: Mushroom Investigation Again; increaseWisdom, increaseWoo
- Go on a sabbatical to find yourself: Sabbatical; increaseWisdom, decreaseFutility
- Quit and choose a different life path; Wise End; increaseWisdom

## Mushroom Investigation Again
title: ;Surely this could be dangerous?;
location: ;Ministry Garden;
scene description: ;You come back the garden under the fading light. The gnome is smiling.;
context: ;You look down at the gnome, then look at the woo woo mushroom... it's like it's calling to me. Eat me. Eat me.;

Choices:
- Eat the mushroom: Mushroom Consumption; increaseWoo, decreaseFutility
- Go on sabbatical and find yourself: Sabbatical; decreaseFutility

## Sabbatical
title: ;To return or not;
location: ;Unknown;
scene description: ;You've taken some time off, reflecting on life, spending time with family and friends and binge watching Trapflix.;
context: ;As your sabbatical comes to an end, you find yourself at a crossroads. The Ministry of Futility seems like a distant memory, yet its pull remains strong. You wonder if you've truly found yourself or if you're just running from the inevitable.;

Choices:
- Return to the Ministry with renewed purpose: Ministry Return; increaseWisdom, decreaseFutility
- Decide life in the Ministry would be futile: GAME OVER

## Ministry Return
title: ;Back to the grind;
location: ;Ministry Entrance;
scene description: ;You stand before the imposing doors of the Ministry, feeling a mix of dread and determination.;
context: ;Your sabbatical has given you new perspective, but as you prepare to re-enter the world of bureaucracy, you wonder if you can truly make a difference this time.;

Choices:
- Enter with a plan for change: Change Agent; increaseWisdom, decreaseFutility
- Slip back into old habits: Futility Embrace; increaseFutility
- Turn around and leave for good: Wise End; increaseWisdom

## Mushroom Picking
title: ;The wisdom of the woo woo mushroom;
location: ;Ministry Garden;
scene description: ;You pick the woo woo mushroom, feeling a sense of enlightenment wash over you. The gnome nods approvingly, as if it knew all along that you would find the mushroom.;
context: ;You hold the mushroom in your hand, feeling its woo woo flow through you.;

Choices:
- Eat the mushroom: Mushroom Consumption; increaseWisdom, increaseWoo
- Return to your cubicle: Work Cubicle Psychadelia; increaseFutility

## Mushroom Consumption
title: ;Insights of the woo woo mushroom;
location: ;Ministry Garden;
scene description: ;You eat the woo woo mushroom, not knowing what to expect. You decide to stay sitting in the garden.;
context: ;Time passes, and you start to feel overwhelmed with futility and a sense of clarity at the same time. The walls and plants are speaking to you. The woo woo spirits of the Ministry. The mushroom has granted you insights into the true nature of the Ministry and your place within it.;

Choices:
- Stay in the garden and contemplate: Garden Woo Woo Contemplation; increaseWisdom, increaseWoo
- Go back to your cubicle: Work Cubicle Psychadelia; increaseFutility

## Revolution
title: ;The call to action;
location: ;Department of Existential Dread;
scene description: ;Your calls for meaningful work and efficient processes are met with blank stares and mandatory re-education seminars. Eventually, you just tow the line and are offered a promotion to Deputy Minister of rEvolutionary Suppression for your "innovative ideas on increasing workplace futility and stiffling real human-centred design.";
context: ;You wander around the department pondering the futility of it all.;

Choices:
- Accept the promotion and suppress your cognitive dissonance: Ironic Promotion, increaseFutility, decreaseWisdom
- Go to the basement and contemplate: Basement First Timer; increaseWisdom
- Go to the Ministry garden to contemplate: Ministry Garden; increaseWisdom

## Ironic Promotion
title: ;The irony of it all;
location: ;Department of Existential Dread;
scene description: ;You accept the promotion to Deputy Minister of rEvolutionary Suppression. It's a position that goes against everything you believe in and the irony is not lost on you. Despite this you decide to make the best of it.;
context: ;You're now in charge of stifling any real change or actual innovation in the Ministry. Your days are filled with meetings about meetings, and your productivity reports are a testament to the futility of your work.;

Choices:
- Continue your work in rEvolutionary Suppression: Suppression Success; increaseFutility
- Go to the Ministry garden to contemplate: Ministry Garden; increaseWisdom
- Give up and leave the Ministry: None; quitGame

## Suppression Success
title: ;The triumph of futility;
location: ;Department of Existential Dread;
scene description: ;Your work in rEvolutionary Suppression has made the Ministry a model of inefficiency and stagnation. You're hailed as a visionary in the field of suppression. Helping to make the Ministry a shining example of futility and stagnation.;
context: ;You're offered a promotion to Minister of rEvolutionary Suppression, overseeing all efforts to stifle real change in the public service.;

Choices:
- Accept the promotion: Minister Ending; decreaseWisdom
- Go to the Ministry garden to contemplate: Ministry Garden; increaseWisdom
- Review your memoirs in the garden: Garden Memoir Review; increaseWisdom

## Book Writing
title: ;Authoring your destiny;
location: ;Ministry Garden;
scene description: ;You sit down to review all your memoirs, capturing the absurdity and futility of your journey through the Ministry. The words flow easily, and you find yourself lost in the narrative of your own making. But you persist and write the final chapter of your book, "50 Shades of Bureaucracy: A Journey Through the Ministry of Futility".;
context: ;Congratulations! Your book becomes an instant bestseller. You're invited back to the Ministry to give a talk, which is promptly scheduled, rescheduled, and ultimately canceled due to an error in the sechduling system built by a large overpaid consulting firm.;

Choices:
- Return to the Ministry as a consultant: Consultant; increaseFutility
- Enjoy your retirement: None; quitGame

## Redundant Redundancies
title: ;The Office of Redundant Redundancies;
location: ;Office of Redundant Redundancies;
scene description: ;You enter the Office of Redundant Redundancies, a place where redundancy is the norm. The walls are lined with memos, each one more redundant than the last. The clerks greet you in unison, their voices echoing in the sterile environment.;
context: ;"Welcome, welcome, welcome to the Office of Redundant Redundancies!";

Choices:
- Ask about their work: Redundant Explanation; increaseWisdom, decreaseFutility
- Offer to help: Redundant Help; increaseFutility, increaseWisdom
- Leave immediately: Lobby; increaseFutility, decreaseWisdom

## Redundant Explanation
title: ;Trying to understand redundancy;
location: ;Office of Redundant Redundancies;
scene description: ;The clerks take turns explaining their job, each repeating exactly what the previous one said. This goes on and on in a monotonous cycle that makes your brain hurt.;
context: ;You try to follow along, but the redundancy of their explanations only adds to the confusion. You wonder if there's any point to their work or if it's all just a bureaucratic exercise in futility.;

Choices:
- Interrupt and offer to help: Redundant Help; increaseFutility, increaseWisdom
- Patiently wait for them to finish: Patience; increaseWisdom, decreaseFutility
- Escape while they're distracted: Lobby; increaseFutility, decreaseWisdom

## Redundant Help
title: ;Inspecting the inspectors;
location: ;Office of Redundant Redundancies;
scene description: ;You offer to help the clerks with their work, diving into the sea of redundancy with gusto. Your efforts are met with a mix of confusion and gratitude, as you uncover layers of redundancy within the redundant processes.;
context: ;You're assigned to triple-check the double-checking of the checkers who check the work of the original checkers in the Department of Auditing of Inspecting. Your first task is to create a checklist for checklist creation for auditors to use.;

Choices:
- Create the checklist: Checklist Creation; increaseFutility
- Suggest streamlining the process: Efficiency Suggestion; increaseFutility, increaseWisdom

## Perpetual Planning Disruption
title: ;A Disruption in Planning;
location: ;Office of Perpetual Planning;
scene description: ;You're in the Office of Perpetual Planning, where the perpetual planning operations are in full swing. The clerks are busy scheduling meetings about planning meetings, and the whiteboards are filled with color-coded timelines, post-it notes and flowcharts. The hum of the fluorescent lights fills the air.;
context: ;As you sit in yet another meeting about planning meetings, a sudden announcement is made: The Ministry is shutting down all perpetual planning operations due to an external audit. The room falls silent as everyone tries to process the news.;

Choices:
- Seize the opportunity to implement real action: Real Action; increaseWisdom
- Organise a meeting with your peers to discuss the shutdown: Shutdown Meeting; increaseFutility

## Shutdown Meeting
title: ;The meeting about the shutdown;
location: ;Office of Perpetual Planning;
scene description: ;You organise a meeting with your peers to discuss the shutdown of perpetual planning operations. The mood is somber as everyone contemplates the implications of the sudden change. The clerks are in a state of shock, unsure of what to do next.;
context: ;As the meeting progresses, you connect with one of your colleagues who shares your frustration with the perpetual planning operations. Together, you begin to brainstorm ideas for implementing real change in the Ministry.;

Choices:
- Take action to implement real change: Real Action; increaseWisdom
- Suggest forming a committee to address the shutdown: Committee Formation; increaseFutility, increaseWisdom
- Go to the basement to contemplate: Basement; increaseWisdom

## Committee Formation
title: ;The formation of a committee to address the shutdown;
location: ;Office of Perpetual Planning;
scene description: ;You and your collegue suggest forming a committee to address the shutdown of perpetual planning operations. The idea is met with cautious optimism, and the clerks begin discussing the logistics of forming a committee. The room is filled with the sound of pens scratching on paper, sharpies writing on post-its and the murmur of futility.;

Choices:
- Proceed with forming the committee: Committee Formation Success; increaseWisdom
- Suggest a different approach: Real Action; increaseWisdom
- Go to the basement to contemplate: Basement; increaseWisdom

## Meaningful Change Implementation
title: ;Reviving Meaningful Change;
location: ;Office of Perpetual Planning;
scene description: ;You decide to revive the Project: Meaningful Change initiative, inspired by the contents of the folder you found in the basement. You gather a small team of like-minded individuals you met in the basement and begin working on the project in secret and crafting an on point proposal for meaningful change. The clerks are too busy with their futile perpetual planning operations to notice your efforts.;
context: ;You have created a proposal for meaningful change that could transform the Ministry. The time has come to decide how to proceed.;

Choices:
- Take the proposal to the Committee on Institutional Change: Committee On Change; decreaseWisdom
- Keep working in secret: Underground Success; increaseFutility, increaseWisdom

## Committee On Change
title: ;A Proposal for Change;
location: ;Office of Perpetual Planning;
scene description: ;You present your proposal on the Project: Meaningful Change to the Committee on Institutional Change. After a lengthy meeting filled with debates and justification of bureaucratic hurdles, the Committee surprisingly approves your proposal. Real change might be on the horizon.;
context: ;The Committee's approval is a rare victory in the Ministry of Futility. You're now faced with a choice on how to proceed.;

Choices:
- Begin implementing changes officially: Meaningful Change Success; increaseWisdom
- Realise the approval might be another bureaucratic trick: Doubtful Approval; increaseFutility
- Gather your team and go to the basement to celebrate: Basement Celebration; increaseWisdom

## Basement Celebration
title: ;The celebration in the basement;
location: ;Basement;
scene description: ;You gather your team in the basement to celebrate. The mood is jubilant as you raise a toast to the future of the Ministry. The basement echoes with laughter and the clinking of glasses. Your collegue says, "This is just the beginning. We have the power to bring real change to the Ministry.";
context: ;The celebration is a moment of triumph in the face of futility. You receive an email from the Committee on Institutional Change congratulating you on your success. Then another moments later saying the project is on hold due to budget constraints but you've been offered a promotion to Minister of Perpetual Planning.;

Choices:
- Reflect on your journey: Memoir Garden Review; increaseWisdom
- Accept the promotion: Minister Ending; decreaseWisdom

## Meaningful Change Success
title: ;The Dawn of a New Ministry;
location: ;Office of Perpetual Planning;
scene description: ;You begin implementing the changes outlined in the Project: Meaningful Change proposal. The Ministry slowly transforms, slowly become more focused on serving the needs of the public. The clerks are inspired by your leadership and dedication to real change. The Ministry is on the path to becoming a model of meaningful public service delivery. Or so you think...;
context: ;Your work has made the Ministry a model of human-centered design and efficiency. You're offered a promotion to Minister of Human-Centered Design, overseeing all design initiatives in the public service.;

Choices:
- Accept the promotion: Minister Ending; decreaseWisdom
- Go to the garden to reflect on your journey: Garden Memoir Review; increaseWisdom

## Doubtful Approval
title: ;A Trap Uncovered;
location: ;Office of Perpetual Planning;
scene description: ;You begin to suspect that the Committee's approval was just another bureaucratic trap. As you implement changes, you encounter resistance at every turn, and soon, all your efforts are undone. You're left wondering if real change is even possible in the Ministry.;
context: ;The Committee's approval was just a bureaucratic trick to keep you busy. Your proposal is shelved, and you're demoted to your previous position in the Office of Perpetual Planning.;

Choices:
- Resign in frustration: End; increaseWisdom
- Continue fighting the system: Underground Movement; increaseFutility

## Underground Movement
title: ;A Secret Movement Begins;
location: ;Basement;
scene description: ;You decide to work in secret to undermine the system. You join the Human-Centered Design Underground, a group dedicated to bringing real human-centered design principles to the Ministry. Your first act is to organise a design thinking workshop in the basement.;

Choices:
- Reflect on your journey: Memoir Garden Review; increaseWisdom
- Proceed with the workshop: Workshop Planning; decreaseFutility, increaseWisdom
- Go to your cubicle to contemplate the risks of your actions: Cubicle Risk Assessment; increaseFutility, decreaseWisdom

## Real Action
title: ;Taking Action;
location: ;Office of Perpetual Planning;
scene description: ;You decide to take action in the wake of the shutdown of perpetual planning operations. You begin asking questions, challenging the status quo, and proposing real solutions to the Ministry's problems. The clerks are taken aback by your boldness, but some are intrigued by the idea of real change.;
context: ;Your actions spark a wave of enthusiasm among your colleagues, and soon, you find yourself getting emails from people you've never met, asking to join your cause.;

Choices:
- Continue your work: Human Centred Design Success; increaseWisdom
- Reflect on your journey: Memoir Garden Review; increaseWisdom
- Go to the basement to contemplate: Basement; increaseWisdom


## Patience
title: ;The virtue of futile patience;
location: ;Office of Redundant Redundancies;
scene description: ;You patiently wait for the clerks to finish their redundant explanations. The cycle of repetition continues, but you remain calm and collected, knowing that your time will come. The clerks finally finish their explanations, and you're left wondering if there's any point to it all.;
context: ;Your patience impresses the clerks. They decide you're overqualified for their department and recommend you for a position in the Committee on Perpetual Planning.;

Choices:
- Accept the recommendation: Perpetual Planning; increaseFutility
- Insist on staying in Redundant Redundancies: Redundant Help; increaseFutility

## Checklist Creation
title: ;The checklist paradox;
location: ;Office of Redundant Redundancies;
scene description: ;You get onto creating the checklist for checklist creation. The clerks watch in awe as you navigate the labyrinth of redundancy with ease. The checklist is a masterpiece of redundancy, a work of art in the world of bureaucratic futility.;
context: ;Upon completion, you're told that there's already a checklist for that, and you'll need to start over using the existing formatting system for checklists to maintain compliance with the rules of the Department of Auditing of Inspecting.;

Choices:
- Start over: Checklist Creation; increaseFutility
- Question the need for so many checklists: Efficiency Suggestion; decreaseFutility, increaseWisdom

## Efficiency Suggestion
title: ;The heresy of efficiency and effectiveness;
location: ;Office of Redundant Redundancies;
scene description: ;You suggest streamlining the checklist creation process to make it more effective in helping people actually do meaningful work.;
context: ;Your suggestion to streamline processes so the department can devote more time to helping the public they are meant to serve is met with shear horror by your superiors. You're immediately sent to the Bureau of Counterproductive Measures for rehabilitation.;

Choices:
- Go to rehabilitation: Counterproductive Measures; increaseFutility
- Refuse and risk termination: Termination Risk; increaseFutility, increaseWisdom
- Go to the Ministry garden to contemplate: Ministry Garden; increaseWisdom

## Perpetual Planning
title: ;The Committee on Perpetual Planning;
location: ;Office of Perpetual Planning;
scene description: ;You accept the recommendation and find yourself in the Committee on Perpetual Planning. The clerks are busy scheduling meetings about planning meetings, and the whiteboards are filled with color-coded timelines, post-it notes and flowcharts. The hum of the fluorescent lights fills the air.;
context: ;Your first task is to schedule a meeting to discuss the agenda for a future meeting about scheduling strategies to design and plan new policies.;

Choices:
- Start scheduling: Scheduling Nightmare; increaseFutility
- Suggest actually doing something meaningful: Action Suggestion; increaseFutility, increaseWisdom

## Scheduling Nightmare
title: ;True accomplishment;
location: ;Office of Perpetual Planning;
scene description: ;You start scheduling meetings about planning meetings, and the cycle of futility continues. The clerks are impressed by your dedication to the cause of perpetual planning, and you quickly rise through the ranks of the Department on Perpetual Planning.;
context: ;You fall into an infinite loop of scheduling meetings about meetings. Weeks and months pass, but no actual real work seems to get accomplished. Your superiors are thrilled with your busyness and productivity.;

Choices:
- Continue your career in perpetual planning: Perpetual Planning; increaseFutility
- Break the cycle and suggest action: Action Suggestion; increaseFutility, increaseWisdom
- Go to the Ministry garden to contemplate: Ministry Garden; increaseWisdom

## Action Suggestion
title: ;The forbidden word;
location: ;Office of Perpetual Planning;
scene description: ;You suggest actually doing something meaningful to the Committee on Perpetual Planning. The clerks are shocked by the audacity of your suggestion, but one of them secretly nods in agreement. The idea of taking action is revolutionary in the world of perpetual planning.;
context: ;Yo impressed the right bureacrat! You're immediately promoted to head the newly formed Department of Theoretical Action Implementation Planning.;

Choices:
- Accept the promotion: Theoretical Action; increaseFutility
- Decline and return to perpetual planning: Perpetual Planning; decreaseFutility, increaseWisdom

## Theoretical Action
title: ;The paper weight on progress;
location: ;Office of Perpetual Planning;
scene description: ;You accept the promotion to head the Department of Theoretical Action Implementation Planning. The clerks are excited to have a leader who values action, even if it's just theoretical. The walls are lined with reports on hypothetical productivity and action plans that will never be implemented.;
context: ;In your new role, you spend your days theorising about implementing actions that will never be taken. Your department produces thick and heavy reports about hypothetical productivity that are immediately archived and forgotten after the Minister for Economic Productivity requests the whole Ministry focus on AI.;

Choices:
- Embrace the absurdity: Absurdity Embrace; increaseFutility; increaseWisdom
- Make one last attempt at meaningful change: Final Stand; decreaseFutility, increaseWisdom

## Absurdity Embrace
title: ;The pinnacle of futility;
location: ;Department of Theoretical Action Implementation Planning;
scene description: ;You've fully embraced the absurdity of your role in the Department of Theoretical Action Implementation Planning. Your days are filled with creating reports about actions that will never be taken, and your productivity is at an all-time low. Which it seems doesn't matter here anyway.;
context: ;You've been offered a promotion to Minister of Futile Affairs, overseeing all pointless endeavors across the nation.;

Choices:
- Accept your role as a Minister: Minister Ending; increaseFutility, decreaseWisdom
- Wake up from this bureaucratic nightmare: End; increaseWisdom
- Go to the Ministry garden to contemplate: Ministry Garden; increaseWisdom

## Final Stand
title: ;The last stand;
location: ;Department of Theoretical Action Implementation Planning;
scene description: ;You deliver an impassioned speech about efficiency and meaningful work echoes through the halls of the Ministry. For a moment, there's deafening silence. Then, thunderous applause erupts. You've accidentally inspired everyone to work harder at being futile.
context: ;Despite the fact you know your speech was hollow rhetoric you've been offered a promotion to Minister of Futile Affairs, overseeing all pointless endeavors across the nation.;

Choices:
- Resign in defeat: End; increaseFutility
- Join the applause and embrace the madness: Minister Ending; increaseFutility

## Minister Ending
title: ;Winning the game or climbing the ladder?;
location: ;Ministry Entrance;
scene description: ;You've achieved the Ministerial status! You now stand before the imposing doors of the Ministry, feeling a mix of dread and determination.;
context: ;Your days are filled with signing blank papers, attending cancelled meetings, establishing Committees, meeting with corporate lobbyists and shady billionaires, and even giving speeches that no one actually listens to because they know it's just empty rhetoric. You've won the game of climbing the bureaucratic ladder, but maybe there's more woosdim to unfurl amidst the futility?;

Choices:
- Play again?: Start; None

## Termination Risk
title: ;The end of infinity;
location: ;Bureau of Counterproductive Measures;
context: ;Your rebellion against futility has not gone unnoticed. You're summoned to the Department of Existential Termination, where you're offered a choice: embrace meaninglessness, face the void of unemployment, or contribute to entreching futility as a contracted consultant.;

Choices:
- Embrace meaninglessness: Existential Department; increaseFutility, decreaseWisdom
- Choose unemployment: None; quiteGame
- Become a consultant: Consultant; increaseFutility, decreaseWisdom
- Go to the Ministry garden to contemplate: Ministry Garden; increaseWisdom

## Consultant
title: ;Consulting the consultants;
location: ;Ministry of Futility;
scene description: ;You've become a consultant, advising the Ministry on how to be uplift capability. The irony is not lost on you.;
context: ;Your days are filled with meetings, reports, and more meetings. You're paid handsomely for your services, but you just can't shake the feeling that you're just another cog in the bureaucratic machine and a trimtab that reinforces the consultancy-government-complex.;

Choices:
- Recommend your own termination: Consultant Termination; increaseFutility, increaseWisdom
- Suggest hiring more consultants: Consultant Expansion; decreaseFutility, increaseWisdom
- Go to the Ministry garden to contemplate: Ministry Garden; increaseWisdom

## Consultant Expansion
title: ;The Rise of Consultants;
location: ;Ministry of Futility;
scene description: ;As your recommendation to expand the consultant role is implemented, the Ministry begins hiring more consultants than actual staff. The consultants soon outnumber the Ministry employees, creating a new layer of inefficiency as they start consulting each other without realising it. Meetings multiply exponentially, reports become even more convoluted, PowerPoints on cloud storage outnumber every other file type and nothing ever gets done. Meanwhile, you sit back and watch the chaos unfold.;
context: ;It suddenly becomes clear to you that you are part of the problem.;

Choices:
- Suggest cutting down on consultants: Consultant Reduction; increaseWisdom, decreaseFutility
- Embrace the absurdity: Consultant Absurdity; increaseFutility, decreaseWisdom
- Go to the Ministry garden to contemplate: Ministry Garden; increaseWisdom

## Consultant Reduction
title: ;A Suggestion Ignored;
location: ;Ministry of Futility;
scene description: ;You suggest cutting down on consultants to restore some semblance of order in the Ministry. However, your suggestion is buried in a report that no one reads. The number of consultants continues to grow, and the chaos deepens.;
context: ;You realise that your efforts to bring about change have been futile. The Ministry is beyond saving.;

Choices:
- Surrender to futility and continue: Consultant Absurdity; increaseFutility, increaseWisdom
- Resign and leave the Ministry: Wise End; None

## Consultant Absurdity
title: ;Consultant Utopia;
location: ;Ministry of Futility;
scene description: ;The Ministry has now become a utopia for consultants, where the only work being done is consulting on how to improve consulting. You've reached the pinnacle of bureaucratic absurdity. Congratulations?;
context: ;You feel the weight of futility bearing down on you as you push down feelings of existential dread and the dissonance you feel.;

Choices:
- Resign and leave the Ministry: Wise End; None
- Go to the Ministry garden to contemplate: Ministry Garden; increaseWisdom

## Wise End
title: ;New beginnings;
location: ;Ministry of Futility;
scene description: ;You've reached the end of your journey through the Ministry of Futility. You've learned valuable lessons about the nature of bureaucracy, futility, and the human spirit. As you step outside, you feel a sense of peace and clarity.;
context: ;As you begin walking away from the Ministry, you second guess yourself... maybe you don't know if you've accomplished anything or learned any lessons at all. You recieve a notification on your smart-ass phone. It's an email inviting you to apply for a position in the Ministry of Futility.;

Choices:
- Apply again: Start; None
- Walk away: GAME OVER; None

## GAME OVER
title: ;To play or not to play;
location: ;noosphere;
scene descriptions: ;Thank you for playing "Ministry of Futility: A Bureaucratic Nightmare";
context: ;Remember, in the game of futility, the only winning move is not to play... or is it?;

Choices:
- Play again?: Start; None

## Futile Ending
title: ;Futility Overload;
location: ;Ministry Entrance;
scene description: ;Your attempts at meaningful contributions have been futile! You collapse into a heap and decide to retire from the public service.;
context: ;End of the line or is there some wiser paths to find as you do the futility grind?;

Choices:
- Play again?: Start; None

# PLOT_END