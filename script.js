document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('command-input');
    const output = document.getElementById('output');
    const commandListButton = document.getElementById('command-list-button');
    const commandList = document.getElementById('command-list');
    const commandListContent = document.getElementById('command-list-content');

    addCommandToList('info');
    addCommandToList('skills');
    addCommandToList('contact');
    addCommandToList('socials');

    commandInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const command = commandInput.value.trim();

            if (command) {
                const newCommand = document.createElement('p');
                newCommand.textContent = `C:\\> ${command}`;
                output.appendChild(newCommand);

                let response;
                switch (command.toLowerCase()) {
                    case 'info':
                        response = `I am niss, 16 years old, living in Switzerland, and currently apprenticing as a Media Specialist.`;
                        break;
                    case 'skills':
                        response = `I specialize in digital media, content creation, and multimedia design, with proficiency in graphic design software and video editing tools.`;
                        break;
                    case 'contact':
                        response = `You can reach me via email at contact@hnes.me.`;
                        break;
                    case 'socials':
                        response = `GitHub: <a href="https://github.com/7niss" target="_blank">7niss</a><br>YouTube: <a href="https://www.youtube.com/@styIing" target="_blank">@styIing</a><br>X: <a href="https://x.com/xn1ss" target="_blank">xn1ss</a>`;
                        break;
                    case 'help': 
                        response = `Press the "Commands" Button to view all possible Commands.`;
                        break;
                    default:
                        response = `Command not recognized: ${command}`;
                }

                const responseParagraph = document.createElement('p');    
                responseParagraph.innerHTML = response; 
                output.appendChild(responseParagraph);

                commandInput.value = '';
                output.scrollTop = output.scrollHeight;  
            }
        }
    });

    commandListButton.addEventListener('click', () => {
        commandList.classList.toggle('hidden');
    });

    function addCommandToList(command) {
        if (![...commandListContent.children].some(item => item.textContent === command)) {
            const listItem = document.createElement('li');
            listItem.textContent = command;
            commandListContent.appendChild(listItem);
        }
    }
});
