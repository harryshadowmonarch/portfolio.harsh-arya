document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const template = document.getElementById('template').value;
    const photoInput = document.getElementById('photo');
    const photoURL = photoInput.files.length > 0 ? URL.createObjectURL(photoInput.files[0]) : '';

    // Create resume content based on selected template
    let resumeContent = `
        <div class="${template}">
            <h3>${name}</h3>
            ${ photoURL ? `<img src="${photoURL}" alt="Profile Photo" style="width:100px;height:auto;">` : ''}
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h4>Education</h4>
            <p>${education}</p>
            <h4>Experience</h4>
            <p>${experience}</p>
        </div>
    `;

    // Display resume
    document.getElementById('resume-content').innerHTML = resumeContent;
    document.getElementById('resume').style.display = 'block';
});

// Download PDF functionality
document.getElementById('download').addEventListener('click', function() {
    const resumeElement = document.getElementById('resume-content');
    html2pdf()
        .from(resumeElement)
        .save('resume.pdf');
});