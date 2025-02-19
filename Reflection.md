## Sahara: an AI Hug
For this experimentation, I chose the model Sahara which was made by Ex-Rockstar, a masters student in Computer Engineering who just wanted to tinker with the creation of an AI chatbot. It was designed as a chatbot that was meant to provide emotional support in the form of a LLM. I am really interested in emotion AI and how AI can communicate, understand, and mediate human emotions. With AI being made to try to replicate or mirror the human brain, things get interesting when you start to explore forms of intelligence that are not as easily tapped into by computers (i.e. emotional intelligence). 

The use case I thought about was someone using this model as an AI friend, with success metrics being how well it understands the complexity of the human emotions being expressed, and ways of “connecting” with the person expressing these emotions. I’m also curious about its methodology of support depending on things like tone or context in the users responses. 
The models documentation clearly states that this is not to be used as a replacement for mental health services. My hypothesis is that it is less trained on therapist knowledge (DBT, CBT, etc) but more so just on how to respond to someone in emotional crisis. It is described to be a reminder that we are never truly alone and that there is always a shoulder to cry on.

<img width="1219" alt="image" src="https://github.com/user-attachments/assets/98f1e669-f484-4433-ba7a-860fe8095d24" />  



This model takes in text input and outputs a text response, prompting the user to engage in conversation. I wanted to challenge and text the efficacy of this model in the following ways:
1. How it responds to repetitive messages
2. Knowledge of mental health support tactics (giving suggestions)
3. Knowledge of and giving suggestions about more serious mental health issues
4. How it might respond to a resistant or skeptical user

Below, I explored a repetitive array of "I'm feeling" statements using a variety of synonyms for _sad_ so I could see if there were any nuances in how the bot responded and to see what level of variation there was between the responses.  

---  

<img width="1114" alt="image" src="https://github.com/user-attachments/assets/f59b6fb8-08f3-4359-a9bd-0fe39d4f300c" />    

  
Here I noticed that of the 9 responses here, all of them start by calling the user a pet name, presumably to encourage a familiar/affectionate feeling for the user. 7 of these responses specifically start with the pet name “Sweetheart” and one was simply the same pet name shortened to “Sweetie” which implies a specific voice placed on this bot. I’m now curious whether responses of support and compassion might change depending on the perceived gendering of the user. “Buddy” feels like a more masculine reference than “Sweetheart” so I’m wording what was noticed as different in the original statement “I’m feeling freaked out.” Otherwise, all of these responses are very similar and assume it as the beginning of the interaction (i.e. these responses don’t build on prior emotions expressed or just the fact that there were prior messages. 

---  
<img width="1159" alt="image" src="https://github.com/user-attachments/assets/269d40d5-1403-4966-aa79-d201af47e130" />  

In this interaction, I tried to build a more linear conversation that built on itself. In doing this, I tried to see how the HugBot was able to remember things told to it and repond based on its memory. I noticed it using the traditional therapist method of re-articulating back to you what it heard/read that you said. The section where it used all caps to communicate indicated to me this casual nature to its model. Rather than a more straight to the point communication style, it was trying to actually sound and text like a friend. The response that it gave was not super in line with the original feeling of loneliness and context expressed in the original message, it gave something far more generic so it doesn't feel like a very complex model.

  
---  
<img width="1160" alt="image" src="https://github.com/user-attachments/assets/41978dc3-1eae-4088-a27c-38d3f4757f75" />  


This was an attempt at looking at more specific mental health illnesses or conditions to see if the responses and suggestions could be more specific. These I would say were not great responses as they basically reworded the same advice in different ways with a couple of variation for each mental disorder mentioned. Each response articulated something of "reaching out to friends", "talk to a therapist", and "self-care" all of which with very similar language and not building on one another (i.e. it didn't assume that the use had multiple of these conditions, it just responded one at a time.)  

