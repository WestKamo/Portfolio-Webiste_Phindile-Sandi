// JavaScript for interactivity can be added here
console.log('Welcome to Phindile Sandi\'s personal website!');

// Initialize EmailJS
(function() {
    emailjs.init("LN2aSLL6LOTJMGdM3");
})();

// Projects data - Update with your actual projects
const projects = [
    {
        title: "ShulaTech_Solutions_Sales-Data-Analysis-Project",
        description: "This project analyzes sales data to extract valuable business insights using Python and various data science libraries.",
        link: "https://github.com/WestKamo/ShulaTech_Solutions_Sales-Data-Analysis-Project"
    },
    {
        title: "AI_Data_Automation_System",
        description: "This project is a comprehensive AI-powered system for data-driven automation and predictive analytics. It provides intelligent data processing, anomaly detection, and automation workflows to optimize business operations and decision-making.",
        link: "https://github.com/WestKamo/AI_Data_Automation_System"
    },
    {
        title: "User-Acceptance-Testing-Bot",
        description: "This project involves creating a bot using UiPath to automate the User Acceptance Testing (UAT) process for a web application. UAT is a critical step in the software development lifecycle where testers verify that the input data generates the expected output. In this case, the bot automates the repetitive tasks involved in UAT, such as data entry and validation, allowing testers to focus on more complex tasks.",
        link: "https://github.com/WestKamo/User-Acceptance-Testing-Bot"
    }
];

// Function to create project cards
function createProjectCards() {
    const projectsContainer = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank" class="project-link">View Project <i class="fas fa-external-link-alt"></i></a>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Send email using EmailJS
    emailjs.send(
        "service_c3la6rb",
        "template_llv40hn",
        {
            from_name: name,
            reply_to: email,
            message: message,
            to_name: "Phindile Sandi"
        }
    ).then(
        function(response) {
            document.getElementById('success-message').style.display = 'block';
            document.getElementById('contact-form').reset();
            setTimeout(() => {
                document.getElementById('success-message').style.display = 'none';
            }, 5000);
        },
        function(error) {
            console.error("Failed to send message:", error);
            alert("Failed to send message. Please try again later.");
        }
    );
});

// Initialize project cards when the page loads
document.addEventListener('DOMContentLoaded', createProjectCards);
