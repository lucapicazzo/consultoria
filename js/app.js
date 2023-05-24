const observerud = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.add('show-v-ud', entry.isIntersecting);
    });
});

const hiddenElementsud = document.querySelectorAll('.hidden-v-ud');
hiddenElementsud.forEach((el) => observerud.observe(el));

const observerdu = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.add('show-v-du', entry.isIntersecting);
    });
});

const hiddenElementsdu = document.querySelectorAll('.hidden-v-du');
hiddenElementsdu.forEach((el) => observerdu.observe(el));

const observerH = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.add('show-h', entry.isIntersecting);
    });
});

const hiddenElementsH = document.querySelectorAll('.hidden-h');
hiddenElementsH.forEach((el) => observerH.observe(el));