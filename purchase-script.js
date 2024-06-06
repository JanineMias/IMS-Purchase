
                        var tableBody = document.querySelector('tbody');
                        var rows = tableBody.querySelectorAll('tr');
                        var popup = document.querySelector('.popup');
                        var pophead = document.querySelector('.pop-head h1');
                        var inputItemName = document.getElementById('itemname');
                        var inputItemId = document.getElementById('itemid');
                        var inputPrice = document.getElementById('price');
                        var inputQuantity = document.getElementById('quantity');
                        var inputAmount = document.getElementById('amount');

                        var btnremove = document.querySelector('.pop-remove');
                        var btnsave = document.querySelector('.pop-save');

                        updateRow(function() {
                            document.querySelector('.button-edit').style.display= 'flex';
                          });

                    document.querySelector('.pop-exit .close').addEventListener('click', function() {
                        popupExit = document.querySelector('.pop-exit .close');
                        popup.style.display = "none"
                    });

                    document.querySelector('.button-Icon').addEventListener('click', function() {
                        // Clear the form
                        inputItemName.value = '';
                        inputItemId.value = '';
                        inputPrice.value = '';
                        inputQuantity.value = '';
                        inputAmount.value = '';
                        pophead.textContent="Add Item";
                        btnremove.style.display = 'none';
                        btnsave.style.width = '100%';
                        popup.style.display = 'flex';
                        if (popup.classList.contains('show')) {
                            popup.classList.remove('show');
                            popup.classList.add('hide');
                        } else {
                            popup.classList.remove('hide');
                            popup.classList.add('show');
                        }
                    });

                        // Add click event listener to the 'Save' button
                        document.querySelector('.pop-save').addEventListener('click', function() {

                        // Get form values
                        const itemName = inputItemName.value;
                        const itemId = inputItemId.value;
                        const itemPrice = inputPrice.value;
                        const itemQuantity = inputQuantity.value;
                        const itemAmount = inputAmount.value;

                        // Clear the form
                        inputItemName.value = '';
                        inputItemId.value = '';
                        inputPrice.value = '';
                        inputQuantity.value = '';
                        inputAmount.value = '';

                        // Close the popup
                        document.querySelector('.popup').style.display = 'none';
                        if(pophead.textContent === "Edit Purchase Order"){
                            icon = selectedrow.querySelector('.material-symbols-outlined');
                            selectedrow.cells[0].textContent = itemName;
                            selectedrow.cells[1].textContent = itemId;
                            selectedrow.cells[2].textContent = itemPrice;
                            selectedrow.cells[3].textContent = itemQuantity;
                            selectedrow.cells[4].textContent = itemAmount;

                        } 
                        else{
                        const row = tableBody.insertRow(-1);
                        const cell1 = row.insertCell(0);
                        const cell2 = row.insertCell(1);
                        const cell3 = row.insertCell(2);
                        const cell4 = row.insertCell(3);
                        const cell5 = row.insertCell(4);
                        cell1.innerHTML = itemName;
                        cell2.innerHTML = itemId;
                        cell3.innerHTML = itemPrice;
                        cell4.innerHTML = itemQuantity;
                        cell5.innerHTML = itemAmount;
                        rows = tableBody.querySelectorAll('tr');

                        updateRow(function() {
                            document.querySelector('.button-edit').style.display = 'flex';
                          });

                        }
                    });

                        // removing the whole selected row in the table
                        document.querySelector('.pop-remove').addEventListener('click', function() {
                        selectedrow = document.querySelector('.selected-row');
                        if (selectedrow) {
                            selectedrow.parentNode.removeChild(selectedrow);
                        }
                        selectedrow.classList.remove('selected-row');

                        //clear form
                        inputItemName.value = '';
                        inputItemId.value = '';
                        inputPrice.value = '';
                        inputQuantity.value = '';
                        inputAmount.value = '';

                        // Close the popup
                        document.querySelector('.popup').style.display = 'none';

                        sortTable(0);
                        rows = tableBody.querySelectorAll('tr');
                        rows.forEach(row => {
                        row.cells[0].textContent = row.rowIndex; 
                        });
                        sortTable(1); 
                        });

                       

                        function updateRow(callback) {
                            // Add click event listener to each row
                            rows.forEach(row => {
                                row.addEventListener('click', function(event) {
                                    // Remove 'selected-row' class from all rows
                                    rows.forEach(row => {
                                        row.classList.remove('selected-row');
                                    });
                                    // Add 'selected-row' class to the clicked row
                                    row.classList.add('selected-row');
                                    // Execute the callback function
                                    if (typeof callback === 'function') {
                                        callback();
                                    }
                                });
                          });
                        }


                        // Add click event listener to the 'Edit' button
                        document.querySelector('.button-edit').addEventListener('click', function() {
                        selectedrow = document.querySelector('.selected-row');
                        inputItemName.value = selectedrow.cells[0].textContent;
                        inputItemId.value = selectedrow.cells[1].textContent;
                        inputPrice.value = selectedrow.cells[2].textContent;
                        inputQuantity.value = selectedrow.cells[3].textContent;
                        inputAmount.value = selectedrow.cells[4].textContent;

                        pophead.textContent="Edit Purchase Order";
                        btnremove.style.display = 'flex';
                        btnsave.style.width = '40%';
                        popup.style.display = 'flex';
                        if (popup.classList.contains('show')) {
                            popup.classList.remove('show');
                            popup.classList.add('hide');
                        } else {
                            popup.classList.remove('hide');
                            popup.classList.add('show');
                            }
                        });

