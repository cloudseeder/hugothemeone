import Fuse from 'fuse.js'
// import AcmeSearchSupport from 'searchSupport.js'

let index = null;
const MAX_SEARCH_RESULTS = 5;

export default {
  async init() {
    try {
      const response = await window.fetch(BASE_URL + "/index.json");
      if (!response.ok) {
        this.removeSearch();
        return;
      }
      let data = await response.json();
      // Just for now.
      // console.log(data);
      index = new Fuse(data, {
        keys: [{
          name: 'title',
          weight: 20
        }, {
          name: 'tag',
          weight: 5
        }, {
          name: 'content'
        }]
      });
      document.addEventListener("input", this.showResults);
      // AcmeSearchSupport();

      let selected = undefined;

      // In case there text already in search box (like when you refresh the page),
      // on hover, trigger the input event.
      /* document.addEventListener("focusin", e => {
        const searchBox = document.querySelector("#search input");
        if (event.target === searchBox) {
          searchBox.dispatchEvent(new Event("input", { bubbles: true }));
          console.log("brooks 777.1");
        }
      }); */

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
              selected = x[x.length - 1];
            }
            if (selected) {
              selected.classList.add("selected");
            }
            break;
          case 'Escape':
            searchBox.blur();
            break;
          case 'Enter':
            // console.log("brooks1");
            // console.log(document.querySelector("#search a"));
            // console.log("brooks2");
            // console.log(selected);
            window.open = (selected || document.querySelector("#search a"))?.click();
            // console.log("brooks3");
            // window.location = (selected || document.querySelector("#search a"))?.click();
            break;
        }
      });

    } catch (e) {
      console.log("brooks error 999");
      this.removeSearch();
    }
  },

 showResults(event) {
    const searchBox = document.querySelector("#search input");
    if (event.target !== searchBox) {
      return;
    }
    // console.log("brooks 777.666");
    const result = document.querySelector("#search div");
    if (searchBox.value.length > 0) {
      const results = index.search(searchBox.value);
      result.innerHTML = results
        .slice(0, MAX_SEARCH_RESULTS)
        .map(x => `<a href="${x.item.url}">
          <img src="${x.item.cover || ""}" width="40" height="40">
          <h3>${x.item.title}</h3>
          <span>${x.item.content.substr(0, 40)}</span>
        </a>`)
        .join("");
    } else {
      result.innerHTML = '';
    }
  },

  removeSearch() {
    console.log("brooks 999");
    document.querySelector("#search")?.remove();
  }
}
