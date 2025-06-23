document.addEventListener('DOMContentLoaded', function() {
    const organisationName = localStorage.getItem('organisationName');
    const domain = localStorage.getItem('domain');
    const contactPerson = localStorage.getItem('contactPerson');
    const contactNumber = localStorage.getItem('contactNumber');
    const email = localStorage.getItem('email');
    const licenses = localStorage.getItem('licenses');
    const validFrom = localStorage.getItem('validFrom');
    const validTo = localStorage.getItem('validTo');
    const address = localStorage.getItem('address');
    const subscription = localStorage.getItem('subscription');

    document.getElementById('displayOrganisationName').textContent = organisationName;
    document.getElementById('displayDomain').textContent = domain;
    document.getElementById('displayContactPerson').textContent = contactPerson;
    document.getElementById('displayContactNumber').textContent = contactNumber;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayLicenses').textContent = licenses;
    document.getElementById('displayValidFrom').textContent = validFrom;
    document.getElementById('displayValidTo').textContent = validTo;
    document.getElementById('displayAddress').textContent = address;
    document.getElementById('displaySubscription').textContent = subscription;
});

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    const form = document.getElementById("clientForm");
    const tableBody = document.querySelector("#clientTable tbody");
    const addClientBtn = document.getElementById("addClientBtn");

    console.log("Form:", form);
    console.log("Table Body:", tableBody);
    console.log("Add Client Button:", addClientBtn);

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("Form submitted");

        const organisationName = document.getElementById("organisationName").value;
        const domain = document.getElementById("domain").value;
        // Add other form field values similarly

        console.log("Organisation Name:", organisationName);
        console.log("Domain:", domain);
        // Log other form values for debugging

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${organisationName}</td>
            <td>${domain}</td>
            <!-- Add other table cell data -->
            <td><a href="#">Edit</a></td>
        `;
        tableBody.appendChild(newRow);

        form.reset();
    });

    addClientBtn.addEventListener("click", function() {
        form.dispatchEvent(new Event("submit"));
    });
});

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
function deleteRow(button) {
            var row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }

        function deleteRow(button) {
            var row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }

        function openModal() {
            document.getElementById("manageModal").style.display = "block";
        }

        function closeModal() {
            document.getElementById("manageModal").style.display = "none";
        }

        function saveChanges() {
            // Logic to save changes (e.g., update the table data)
            closeModal();
        }

        // Close the modal when clicking outside of it
        window.onclick = function(event) {
            var modal = document.getElementById("manageModal");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }     

       // Function to open the modal
function openModal() {
    var modal = document.getElementById('manageModal');
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById('manageModal');
    modal.style.display = 'none';
}

// Function to save changes
function saveChanges() {
    // Get input values
    var licenceNumber = document.getElementById('licenceNumber').value;
    var location = document.getElementById('location').value;
    var validFrom = document.getElementById('validFrom').value;
    var validTo = document.getElementById('validTo').value;

    // Update subscription table
    updateSubscriptionTable(licenceNumber, location, validFrom, validTo);

    // Close modal
    closeModal();
}

// Function to update subscription table
function updateSubscriptionTable(licenceNumber, location, validFrom, validTo) {
    var table = document.getElementById('subscriptionTable').getElementsByTagName('tbody')[0];
    var row = table.insertRow();
    var rowCount = table.rows.length;

    // Insert S.No., Start Date, End Date into the new row
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);

    cell0.innerHTML = rowCount;
    cell1.innerHTML = validFrom;
    cell2.innerHTML = validTo;
}
