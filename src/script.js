document.addEventListener('DOMContentLoaded', function() {
    const surveyForm = document.getElementById('surveyForm');

    surveyForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        // Validate raffle numbers
        const raffleInput = document.getElementById('raffle').value;
        const raffleNumbers = raffleInput.split(',').map(num => parseInt(num.trim()));
        
        if (raffleNumbers.length < 10) {
            alert('Please enter at least 10 numbers for the raffle');
            return;
        }

        if (!raffleNumbers.every(num => num >= 1 && num <= 100)) {
            alert('All raffle numbers must be between 1 and 100');
            return;
        }

        // Get checkbox values for liked features
        const likedFeatures = Array.from(document.querySelectorAll('input[name="liked"]:checked'))
            .map(checkbox => checkbox.value);

        // Create form data object
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            streetAddress: document.getElementById('streetAddress').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zip: document.getElementById('zip').value,
            telephone: document.getElementById('telephone').value,
            email: document.getElementById('email').value,
            dateOfSurvey: document.getElementById('dateOfSurvey').value,
            likedFeatures: likedFeatures,
            heardAbout: document.querySelector('input[name="heardAbout"]:checked')?.value,
            recommendation: document.getElementById('recommendation').value,
            raffleNumbers: raffleNumbers,
            comments: document.getElementById('comments').value
        };

        try {
            const response = await fetch('http://localhost:8080/surveyresponse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            alert('Survey submitted successfully!');
            surveyForm.reset();

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your survey. Please try again later.');
        }
    });
});