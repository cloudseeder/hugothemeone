const SearchSupport = () => {
  let selected = undefined;

  // In case there text already in search box (like when you refresh the page),
  // on hover, trigger the input event.
  document.addEventListener("focusin", e=> {
    const searchBox = document.querySelector("#search input");
    if (event.target === searchBox) {
      searchBox.dispatchEvent(new Event("input", {bubbles: false}));
    }
  });

  // Mouse handling
  document.addEventListener("click", e => {
    const searchBox = document.querySelector("#search div a");
    if (event.target !== searchBox) {
      return;
    }
    console.log("brooks 777");
    switch (event.onclick) {
      case 'MouseOver':
        if (selected) {
          selected.classList.remove("selected");
          selected = selected.nextElementSibling;
        } else {
          selected = document.querySelectorAll("#search a")[0];
        }
        if (selected) {
          selected.classList.add("selected");
        }
        break;
      case 'MouseLeave':
        if (selected) {
          selected.classList.remove("selected");
          selected = selected.previousElementSibling;
        } else {
          const x = document.querySelectorAll("#search a");
          selected = x[x.length - 1] ;
        }
        if (selected) {
          selected.classList.add("selected");
        }
        break;
      case 'Escape':
        searchBox.blur();
        break;
      case 'Click':
        console.log("brooks1");
        console.log(document.querySelector("#search a"));
        console.log("brooks2");
        window.open = selected.click();
        // document.querySelector(selected);
        console.log("brooks3");
        window.location = (selected || document.querySelector("#search a"))?.click();
        break;
      }
  });


  // Keyboard handling
  document.addEventListener("keyup", e => {
    const searchBox = document.querySelector("#search input");
    if (event.target !== searchBox) {
      return;
    }
    switch (event.key) {
      case 'ArrowDown':
        if (selected) {
          selected.classList.remove("selected");
          selected = selected.nextElementSibling;
        } else {
          selected = document.querySelectorAll("#search a")[0];
        }
        if (selected) {
          selected.classList.add("selected");
        }
        break;
      case 'ArrowUp':
        if (selected) {
          selected.classList.remove("selected");
          selected = selected.previousElementSibling;
        } else {
          const x = document.querySelectorAll("#search a");
          selected = x[x.length - 1] ;
        }
        if (selected) {
          selected.classList.add("selected");
        }
        break;
      case 'Escape':
        searchBox.blur();
        break;
      case 'Enter':
        console.log("brooks1");
        console.log(document.querySelector("#search a"));
        console.log("brooks2");
        window.open = selected.click();
        // document.querySelector(selected);
        console.log("brooks3");
        // window.location = (selected || document.querySelector("#search a"))?.click();
        break;
      }
  });
};

export default SearchSupport;
