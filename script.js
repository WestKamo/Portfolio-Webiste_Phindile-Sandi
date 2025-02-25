// JavaScript for interactivity can be added here
console.log('Welcome to Phindile Sandi\'s personal website!');

// Initialize EmailJS
(function() {
    emailjs.init("LN2aSLL6LOTJMGdM3");
})();

// Projects data
const projects = [
    {
        title: "NWU Tech Trends Web Application",
        description: "Designed and developed a web application to manage CRUD operations for project and client data. The application emphasizes the importance of understanding and improving existing code by adhering to architectural patterns, coding principles, and design patterns.",
        link: "https://github.com/WestKamo/Web-API-Cloud-Hosting"
    },
    {
        title: "ShulaTech Solutions Sales Data Analysis",
        description: "This project analyzes sales data to extract valuable business insights using Python and various data science libraries. Implemented advanced analytics techniques to drive data-driven decision making.",
        link: "https://github.com/WestKamo/ShulaTech_Solutions_Sales-Data-Analysis-Project"
    },
    {
        title: "AI Data Automation System",
        description: "A comprehensive AI-powered system for data-driven automation and predictive analytics. Provides intelligent data processing, anomaly detection, and automation workflows to optimize business operations and decision-making.",
        link: "https://github.com/WestKamo/AI_Data_Automation_System"
    },
    {
        title: "User Acceptance Testing Bot",
        description: "Created an automated UAT bot using UiPath to streamline the testing process for web applications. This solution automates repetitive testing tasks, improving efficiency and allowing testers to focus on complex scenarios.",
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
