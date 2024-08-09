document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('command-input');
    const output = document.getElementById('output');
    const commandListButton = document.getElementById('command-list-button');
    const commandList = document.getElementById('command-list');
    const commandListContent = document.getElementById('command-list-content');

    // Add the "info", "skills", "contact", "socials", and "NeuerChatterBallHochhalten" commands to the command list initially
    addCommandToList('info');
    addCommandToList('skills');
    addCommandToList('contact');
    addCommandToList('socials');
    addCommandToList('NeuerChatterBallHochhalten');

    commandInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const command = commandInput.value.trim();

            if (command) {
                const newCommand = document.createElement('p');
                newCommand.textContent = `C:\\> ${command}`;
                output.appendChild(newCommand);

                // Process the command
                let response;
                switch (command.toLowerCase()) {
                    case 'info':
                        response = `I am Hannes, 16 years old, living in the canton of Valais, Switzerland, and currently apprenticing as a Media Specialist (Mediamatiker).`;
                        break;
                    case 'skills':
                        response = `I specialize in digital media, content creation, and multimedia design, with proficiency in graphic design software and video editing tools.`;
                        break;
                    case 'contact':
                        response = `You can reach me via email at contact@hnes.me or connect with me on Instagram at <a href="https://www.instagram.com/gipflaer/" target="_blank">@gipflaer</a>.`;
                        break;
                    case 'socials':
                        response = `GitHub: <a href="https://github.com/7niss" target="_blank">7niss</a><br>
                                    YouTube: <a href="https://www.youtube.com/@styIing" target="_blank">@styIing</a><br>
                                    X: <a href="https://x.com/xn1ss" target="_blank">xn1ss</a>`;
                        break;
                    case 'neuerchatterballhochhalten':
                        response = `hilfe: <a href="https://www.twitch.tv/sirexpert_" target="_blank">Sirexpert on Twitch</a>`;
                        break;
                    default:
                        response = `Command not recognized: ${command}`;
                }

                const responseParagraph = document.createElement('p');
                responseParagraph.innerHTML = response; // Use innerHTML to render the anchor tags
                output.appendChild(responseParagraph);

                // Add command to list if not already there
                if (![...commandListContent.children].some(item => item.textContent === command)) {
                    addCommandToList(command);
                }

                commandInput.value = '';
                output.scrollTop = output.scrollHeight;  // Scroll to the bottom
            }
        }
    });

    commandListButton.addEventListener('click', () => {
        commandList.classList.toggle('hidden');
    });

    function addCommandToList(command) {
        // Check if command is already in the list to avoid duplicates
        if (![...commandListContent.children].some(item => item.textContent === command)) {
            const listItem = document.createElement('li');
            listItem.textContent = command;
            commandListContent.appendChild(listItem);
        }
    }
});
