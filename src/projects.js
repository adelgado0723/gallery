const Data = {
  projects: [
    {
      name: 'Werewolf',
      label: 'Multiplayer Role Playing Game',
      // info: 'Project 1 Description',
      images: [
        'https://github.com/adelgado0723/Werewolf/blob/master/Client/images/WereWolf_512x512.gif',
        'https://picsum.photos/id/103/250/250',
        'https://picsum.photos/id/141/250/250',
        'https://picsum.photos/id/301/250/250',
      ],
      background: 'https://picsum.photos/id/555/800/800',
      summary:
        'Werewolf! takes place in a chat room where users play the role of villagers investigating a series of crimes. They don’t know who the murderer is, but they do know that he/she passes off as a villager during the day. This has led them to adopt the practice of casting out one villager per day in hopes of casting out the murderer.',
      technologies: ['Python', 'Tkinter', 'TCP Sockets', 'Node', 'Express'],
      github: 'https://github.com/adelgado0723/Werewolf',
      demo: '',
    },
    {
      name: 'Geek Peek',
      label: 'Nerdy Book Store',
      // info: 'Project 2 Description',
      images: [
        'https://picsum.photos/id/121/250/250',
        'https://picsum.photos/id/133/250/250',
        'https://picsum.photos/id/147/250/250',
      ],
      background: 'https://picsum.photos/id/528/800/800',
      summary:
        'Geek Peek is an online bookstore in the spirit of the website, www.thinkgeek.com. It was developed over the course of ten weeks, subdivided into five two-week sprints. Features were distributed to a group of five developers that worked in a Scrum/Agile Fashion. We held regular stand-up meetings as well as weekly planning, review, and retrospective meetings. The Project Requirements were specified at the onset and the developers left to schedule the user stories pertaining to their feature.',
      technologies: [
        'Django',
        'Python',
        'SQLite',
        'JavaScript',
        'HTML',
        'CSS',
        'BootStrap',
      ],
      github: 'https://github.com/adelgado0723/GeekPeek',
      demo: '',
    },
    {
      name: 'Decision Tree Generator',
      label: 'Data-driven Decision Making',
      // info: 'Project 3 Description',
      images: [
        'https://picsum.photos/id/383/250/250',
        'https://picsum.photos/id/243/250/250',
        'https://picsum.photos/id/135/250/250',
        'https://picsum.photos/id/343/250/250',
        'https://picsum.photos/id/459/250/250',
        'https://picsum.photos/id/249/250/250',
      ],
      background: 'https://picsum.photos/id/657/800/800',
      summary:
        "Decision Trees are a way of finding correlations in people's behavior from data about their habits. This program builds a decision tree based on a given input file and then proceeds to classify a user-provided tuple of data. In the example below, the input file holds information that a computer manufacturing company has collected about their customers. The Decision Tree Generator will attempt to find other factors and combinations of factors (such as age, income, and student status) related to that a customer's is likeliness to make a purchase.",
      technologies: ['Java', 'Mschine Learning'],
      github: 'https://github.com/adelgado0723/DecisionTreeGenerator',
      demo: '',
    },
    {
      name: 'Steg Tool',
      label: 'Text-In-Image Encryption',
      // info: 'Project 4 Description',
      images: [
        'https://picsum.photos/id/348/250/250',
        'https://picsum.photos/id/450/250/250',
        'https://picsum.photos/id/247/250/250',
      ],
      background: 'https://picsum.photos/id/487/800/800',
      summary:
        '<p>Steganography is the practice of hiding a message in plain sight. This could mean hiding an ASCII text message inside of an image or an image inside of a video.</p><p>This application was developed to test how the encoding algorithm performs with a varying number of CPU cores.</p>',

      technologies: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/adelgado0723/Steg-Tool',
      demo: '',
    },
    {
      name: 'RSA',
      label: 'Text Encryption',
      // info: 'Project 5 Description',
      images: [
        'https://picsum.photos/id/127/250/250',
        'https://picsum.photos/id/426/250/250',
        'https://picsum.photos/id/229/250/250',
      ],
      background: 'https://picsum.photos/id/481/800/800',
      summary:
        '<p>The RSA algorithm for encryption draws its strength from the Fundamental Theorem Of Arithmetic, which states that any positive integer either is a prime number or can be uniquely represented as a product of prime numbers.</p> <p>In order to crack the encryption provided by the RSA algorithm, one must factor a very large number into its unique prime constituents; a lengthy process with no straight-forward easy solution.</p>',
      technologies: ['Java', 'Number Theory', 'Modular Arithmetic'],
      github: 'https://github.com/adelgado0723/RSAText-FileEncryption',
      demo: '',
    },
    {
      name: 'Portfolio',
      label: 'My Projects',
      // info: 'Project 6 Description',
      images: [
        'https://picsum.photos/id/139/250/250',
        'https://picsum.photos/id/430/250/250',
        'https://picsum.photos/id/237/250/250',
      ],
      background: 'https://picsum.photos/id/482/800/800',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, eveniet ullam natus molestiae quam unde in quo sit voluptatibus modi maxime aliquam nisi itaque adipisci ea harum beatae? Vel, recusandae?  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus nihil, deserunt provident, error ea qui facere blanditiis, corrupti illum itaque officiis nisi. Nemo odio quibusdam, quidem reprehenderit enim laboriosam?',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/adelgado0723/andy-delgado.com',
      demo: '',
    },
    {
      name: 'Pet Adoption',
      label: 'Read more about project 7',
      // info: 'Project 7 Description',
      images: [
        'http://via.placeholder.com/250x250',
        'http://via.placeholder.com/250x250',
      ],
      background: 'https://picsum.photos/id/483/800/800',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, eveniet ullam natus molestiae quam unde in quo sit voluptatibus modi maxime aliquam nisi itaque adipisci ea harum beatae? Vel, recusandae?  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus nihil, deserunt provident, error ea qui facere blanditiis, corrupti illum itaque officiis nisi. Nemo odio quibusdam, quidem reprehenderit enim laboriosam?',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/adelgado0723/IntroToReact',
      demo: '',
    },
    {
      name: 'Other Projects',
      label: 'Read more about project 8',
      // info: 'Project 8 Description',
      images: [
        'http://via.placeholder.com/250x250',
        'http://via.placeholder.com/250x250',
      ],
      background: 'https://picsum.photos/id/455/800/800',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, eveniet ullam natus molestiae quam unde in quo sit voluptatibus modi maxime aliquam nisi itaque adipisci ea harum beatae? Vel, recusandae?  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus nihil, deserunt provident, error ea qui facere blanditiis, corrupti illum itaque officiis nisi. Nemo odio quibusdam, quidem reprehenderit enim laboriosam?',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      github: '',
      demo: '',
    },
  ],
};

export default Data;
