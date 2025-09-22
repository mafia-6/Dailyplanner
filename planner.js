      const checkbox = document.getElementById("selfCareCheckbox");
      const checkboxes = document.querySelectorAll('.categoryCheckbox');
      const dropdown = document.getElementById("dropdownWrapper");
      const table = document.getElementById("selfCareSubcategories");
      const categoryRow = document.querySelector('#category1 tr:nth-child(2)');
      const addRowBtn = document.getElementById("addRowBtn");
      const descriptionRow = document.getElementById("description").closest("tr");
      let dropdownClosedByOutsideClick = false;
      
      function showSelfCareSubcategories() {
        if (checkbox.checked) {
          dropdown.style.display = "block";
          dropdown.style.maxHeight = "0";
          setTimeout(() => {
            dropdown.style.maxHeight = "1000px";
            table.style.display = "table";
          }, 500);
        } else {
          dropdown.style.maxHeight = "0";
          setTimeout(() => {
            table.style.display = "none";
            dropdown.style.display = "none";
            clearSelfCareForm();
            clearclonedrows();
          }, 500);
        }
      }

      function clearSelfCareForm() {
        document.getElementById("selfcare").value = "";
        document.getElementById("description").value = "";
        document.getElementById("urgent").checked = false;
        document.getElementById("Imp").checked = false;
        document.getElementById("Priority").checked = false;
        document.getElementById("var task").checked = false;
        document.getElementById("recrr task").checked = false;
        document.getElementById("frequency").value = "";
      }

      function clearclonedrows(){
        document.querySelectorAll('.cloned-row').forEach(row => row.remove());
      }

      document.addEventListener("click", function (e) {
        const isInsideDropdown = dropdown.contains(e.target);
        const isCheckbox = checkbox.contains(e.target);
        const isCategoryClick = categoryRow.contains(e.target);

        if (!isInsideDropdown && !isCheckbox && !isCategoryClick && dropdown.style.display === "block") {
          dropdown.style.maxHeight = "0";
          dropdownClosedByOutsideClick = true;
          setTimeout(() => {
            table.style.display = "none";
            dropdown.style.display = "none";
          }, 500);
        }
      });

      categoryRow.addEventListener("click", function (e) {
        e.stopPropagation();
        if (checkbox.checked && dropdownClosedByOutsideClick) {
          dropdown.style.display = "block";
          dropdown.style.maxHeight = "0";
          setTimeout(() => {
            dropdown.style.maxHeight = "1000px";
            table.style.display = "table";
          }, 50);
          dropdownClosedByOutsideClick = false;
        }
      });

  addRowBtn.addEventListener('click', function() {
  const inputRow = document.getElementById('inputrow');
  const newRow = inputRow.cloneNode(true);
  newRow.classList.add('cloned-row'); // yeh line CSS class assign karegi

  // Inputs clear karo
  newRow.querySelectorAll('input, textarea').forEach(el => {
    if(el.type === 'checkbox') el.checked = false;
    else el.value = '';
  });

  // Nayi row ko inputrow ke baad insert karo
  inputRow.parentNode.insertBefore(newRow, inputRow.nextSibling);
});
