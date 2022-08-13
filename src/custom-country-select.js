const countries = ["United States", "Australia", "Austria", "Belgium", "Bulgaria"];
const classesForCountries = ["us", "au", "at", "be", "bg"];
let isCheckboxClicked = false;
let lastHeaderImg;

class CustomSelect extends HTMLElement {
    constructor() {
        super();

        const shadowEl = this.attachShadow({mode: 'open'});
        const selectListElementRoot = document.createElement('div');
        selectListElementRoot.classList.add('shadow-list');

        const selectHeader = document.createElement('div');
        selectHeader.classList.add('select-header');
        selectListElementRoot.appendChild(selectHeader);

        const countryImageOnHeader = document.createElement("div");
        countryImageOnHeader.value = countries[0];
        countryImageOnHeader.innerText = countries[0];
        countryImageOnHeader.classList.add(`${classesForCountries[0]}`);
        lastHeaderImg = classesForCountries[0];
        countryImageOnHeader.classList.add('country');
        countryImageOnHeader.classList.add('country-on-header');
        selectHeader.appendChild(countryImageOnHeader);

        const checkboxIcon = document.createElement('img');
        checkboxIcon.classList.add('checkbox-icon');
        checkboxIcon.src = 'images/arrow.png';
        selectHeader.appendChild(checkboxIcon);


        const selectBody = document.createElement('div');
        selectBody.classList.add('select-body');
        selectListElementRoot.appendChild(selectBody);

        for (let i = 0; i < countries.length; i++) {
            let option = document.createElement("div");
            option.value = countries[i];
            option.innerText = countries[i];
            option.classList.add(`${classesForCountries[i]}`);
            option.classList.add('country');

            selectBody.appendChild(option);

            option.addEventListener('click', () => {
                countryImageOnHeader.value = countries[i];
                countryImageOnHeader.innerText = countries[i];
                countryImageOnHeader.classList.remove(`${lastHeaderImg}`);
                countryImageOnHeader.classList.add(`${classesForCountries[i]}`);
                lastHeaderImg = classesForCountries[i];
                selectBody.style.visibility = 'hidden';
                isCheckboxClicked = false;
            });
        }


        selectHeader.addEventListener('click', () => {
            if (!isCheckboxClicked) {
                selectBody.style.visibility = 'visible';
                isCheckboxClicked = true;
                return;
            } else {
                selectBody.style.visibility = 'hidden';
                isCheckboxClicked = false;
                return;
            }
        });

        const linkStyleCSS = document.createElement('link');
        linkStyleCSS.setAttribute('rel', 'stylesheet');
        linkStyleCSS.setAttribute('href', 'styles/custom-select-styles.css');
        shadowEl.appendChild(linkStyleCSS);

        shadowEl.append(selectListElementRoot);
    }
}

customElements.define('custom-select', CustomSelect);