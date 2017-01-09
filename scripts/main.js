let Slider = {
    setup() {
        this.index = 0;
        this.$list = document.querySelectorAll('ul li');

        this.hideAllPhotos();
        this.displayPhoto(this.getCurrentPhoto());
        this.setupInterval();
    },

    hideAllPhotos() {
        Array.from(this.$list).forEach(($item) => {
            this.hidePhoto($item);
        });
    },

    setupInterval() {
        this.interval = setInterval(() => {
            this.displayNextPhoto();
        }, 1000);
    },

    stopInterval() {
        clearInterval(this.interval);
    },

    getCurrentPhoto() {
        return this.$list[this.index];
    },

    hidePhoto($photo) {
        $photo.classList.add('hide');
    },

    displayPhoto($photo) {
        $photo.classList.remove('hide');
    },

    displayPreviousPhoto() {
        let $currentPhoto = this.getCurrentPhoto();
        this.hidePhoto($currentPhoto);

        this.index--;
        if (this.index === -1) {
            this.index = this.$list.length - 1;
        }

        let $nextPhoto = this.getCurrentPhoto();
        this.displayPhoto($nextPhoto);
    },

    displayNextPhoto() {
        let $currentPhoto = this.getCurrentPhoto();
        this.hidePhoto($currentPhoto);

        this.index++;
        if (this.index === this.$list.length) {
            this.index = 0;
        }

        let $nextPhoto = this.getCurrentPhoto();
        this.displayPhoto($nextPhoto);
    }
};

Slider.setup();

document.querySelector('.leftArrow').addEventListener('click', (evt) => {
    evt.preventDefault();
    Slider.stopInterval();
    Slider.displayPreviousPhoto();
});

document.querySelector('.rightArrow').addEventListener('click', (evt) => {
    evt.preventDefault();
    Slider.stopInterval();
    Slider.displayNextPhoto();
});
