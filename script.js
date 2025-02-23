// JavaScript for interactivity can be added here
console.log('Welcome to Phindile Sandi\'s personal website!');

// Initialize EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

// Sample projects data - replace with your own projects
const projects = [
    {
        title: "Project 1",
        description: "Description of your first project. Highlight the key features and technologies used.",
        image: "project1.jpg",
        link: "#"
    },
    {
        title: "Project 2",
        description: "Description of your second project. Showcase your skills and achievements.",
        image: "project2.jpg",
        link: "#"
    }
];

// Function to create project cards
function createProjectCards() {
    const projectsContainer = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
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
    emailjs.send("default_service", "template_id", { // Replace with your service and template IDs
        from_name: name,
        reply_to: email,
        message: message
    }).then(
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
