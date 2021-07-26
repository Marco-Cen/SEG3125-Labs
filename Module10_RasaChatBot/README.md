Within this repository includes labatory work from the course: SEG 3125: Module Lab 10

# Objective: 
- Exploring "Rasa" for conversational design (Build a simple chatbot)
    - Hands-on experience building a chatbot that could be used as alternative to traditional (WIMP style) UI
    - "Rasa" is not too intuitive, but does have Open Source version to try without any registration process and has good documentations
- linear design (no branching) of:
    - One story to subscribe to the newsletter.
    - One story to unsubscribe to the newsletter.
- Requirements:
    - 1. Expand the “greet and subscribe” story. First, the variations to say “hello” are limited. Also,
    it is not possible in the current story to end the conversation with thank you and good bye
    (as shown in the examples in the Design section).
    a. Add at least 4 training sentences for the greet intent already defined.
    b. Define a new Thank You intent for which you will define at least 4 training examples,
    as well as 4 possible responses from the chatbot (e.g. “Thanks”, “Glad I could help”).
    c. Define a new Goodbye intent for which you will define at least 4 training examples,
    as well as 4 possible responses from the chatbot (e.g. “Bye”, “Goodbye”).
    d. Modify the story to include the Thank you and Goodbye intents at the end (see
    example in Design section).
    2. Add a story, called “greet and unsubscribe” in which a user will ask the chatbot to
    unsubscribe and then the chatbot will ask to explain why, the user will provide some reason
    (not interested anymore, not time, etc), and the chatbot will answer with empathy (ok, we
    understand / no problem, etc). Provide at least 4 training examples for each intent, and 4
    alternatives for each response of the chatbot.
    3. (optional) You can play and add anything else you want in this chatbot. 

<br> 

https://rasa.com/
https://rasa.com/docs/rasa/playground
https://rasa.com/docs/rasa/command-line-interface

<br>

(Included in this directory are files required for making the simple chatbot with Rasa)


## Steps
1) Familiarize self with Rasa (via Rasa Playground)
- Explore #1-3 (NLU data, Responses, Stores (Linear stories for now))
- Download Trained project from Rasa Playground

2) Install Open-Source version of Rasa
- (Because not practical to expand on Rasa Playground)
- Allows ability to work locally with playground via dwnld open-source version of Rasa
How to:

(With Python 3.6 or later installed already) 
    Type:

    ``` bash
    pip3 install -U pip
    pip3 install rasa
    ```

(Without Python 3.6 or later installed already)
-  Follow: https://rasa.com/docs/rasa/installation 


3) Use Cmd Line Interface to perform different Rasa cmds: (https://rasa.com/docs/rasa/command-line-interface)
    ``` bash
    rasa train
    rasa shell
    ```

   -  rasa train == train ML model based on intents, responses and stories
    - rasa shell == test chatbot

4) Edit the .yml (YAMAL) files