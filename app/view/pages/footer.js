export default function render(){
    return $(`<footer id='footer'>`).append(`
    <div class="footer-content">
        <div class="contact-info">
            <a href="https://github.com/joaosf7"><img id='github-logo' src="./app/assets/images/githubLogo.png" alt="github logo"/></a>
            <p>Contact: joaosf7@gmail.com</p>
        </div>
    </div>
    <div class="legal-info">
        <p>&copy; 2024 joaosf7.</p>
        <p>MIT License</p>
    </div>
    `)
}