document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('clientForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve form data
        const organisationName = document.getElementById('organisationName').value;
        const contactPerson = document.getElementById('contactPerson').value;
        const email = document.getElementById('email').value;
        const validFrom = document.getElementById('validFrom').value;
        const validTo = document.getElementById('validTo').value;
        const subscription = document.getElementById('subscription').value;
        const domain = document.getElementById('domain').value;
        const contactNumber = document.getElementById('contactNumber').value;
        const address = document.getElementById('address').value;
        const licenses = document.getElementById('licenses').value;

        // Store data in localStorage
        localStorage.setItem('organisationName', organisationName);
        localStorage.setItem('contactPerson', contactPerson);
        localStorage.setItem('email', email);
        localStorage.setItem('validFrom', validFrom);
        localStorage.setItem('validTo', validTo);
        localStorage.setItem('subscription', subscription);
        localStorage.setItem('domain', domain);
        localStorage.setItem('contactNumber', contactNumber);
        localStorage.setItem('address', address);
        localStorage.setItem('licenses', licenses);

        // Redirect to client-details.html
        window.location.href = 'client-details.html';
    });
});
function saveClientDetails() {
    const organisationName = document.getElementById('organisationName').value;
    const domain = document.getElementById('domain').value;
    const contactPerson = document.getElementById('contactPerson').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const email = document.getElementById('email').value;
    const licenses = document.getElementById('licenses').value;
    const validFrom = document.getElementById('validFrom').value;
    const validTo = document.getElementById('validTo').value;
    const address = document.getElementById('address').value;
    const subscription = document.getElementById('subscription').value;

    localStorage.setItem('organisationName', organisationName);
    localStorage.setItem('domain', domain);
    localStorage.setItem('contactPerson', contactPerson);
    localStorage.setItem('contactNumber', contactNumber);
    localStorage.setItem('email', email);
    localStorage.setItem('licenses', licenses);
    localStorage.setItem('validFrom', validFrom);
    localStorage.setItem('validTo', validTo);
    localStorage.setItem('address', address);
    localStorage.setItem('subscription', subscription);

    // Redirect to client-details.html after saving
    window.location.href = 'client-details.html';
}

document.addEventListener('DOMContentLoaded', function() {
    // Selecting search input elements
    const searchOrganisationName = document.getElementById('searchOrganisationName');
    const searchContactPerson = document.getElementById('searchContactPerson');
    const searchContactNumber = document.getElementById('searchContactNumber');

    // Selecting table rows
    const tableRows = document.querySelectorAll('#clientTable tbody tr');

    // Add event listeners to search inputs
    searchOrganisationName.addEventListener('input', function() {
        filterTable(searchOrganisationName.value.trim(), 0); // 0 represents the index of Organisation Name column
    });

    searchContactPerson.addEventListener('input', function() {
        filterTable(searchContactPerson.value.trim(), 2); // 2 represents the index of Contact Person column
    });

    searchContactNumber.addEventListener('input', function() {
        filterTable(searchContactNumber.value.trim(), 3); // 3 represents the index of Contact Number column
    });

    function filterTable(searchTerm, columnIndex) {
        const regex = new RegExp(searchTerm, 'i'); // Case insensitive search
        tableRows.forEach(row => {
            const cellText = row.children[columnIndex].textContent.trim();
            if (regex.test(cellText)) {
                row.style.display = ''; // Show row if search term matches
            } else {
                row.style.display = 'none'; // Hide row if search term does not match
            }
        });
    }
});
