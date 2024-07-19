 const motivMessages = {
        motivational: ["Don't give up, you can do it!",
                        "Your doing your best im proud of you " ],
        semiMotivational: ["I guess you can do it if you want.", 
                            "I see your trying keep that up."],
        nonMotivational: ["Give up, you can't do it!",
                           "Its not working out, you suck!" ]
        
        
      
}

const randomGenerator = (array) => array[Math.floor(Math.random()* array.length)]

const createMessage = () => {
    let message = "";


for (let key in motivMessages) {
    if (motivMessages.hasOwnProperty(key)) {
        let subject = randomGenerator(motivMessages[key])
    

      switch (key) {
        case 'motivational':
          message += `Motivational: ${subject}\n`;
          break;
        case 'semiMotivational':
          message += `Semi-Motivational: ${subject}\n`;
          break;
        case 'nonMotivational':
          message += `Non-Motivational: ${subject}\n`;
          break;
      }
    }
}


  return message;
};

console.log(createMessage());
