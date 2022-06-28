//popup
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup-close');

console.dir(popup);
popupClose.addEventListener('click', function() {
    popup.style.visibility = 'hidden'
})

// FAQ
const itemHeadlines = document.querySelectorAll('.faq__item-headline');
const faqItems = document.querySelectorAll('.faq__item')

itemHeadlines.forEach(itemHeadline => {
    itemHeadline.addEventListener('click', function(event) {
        const item = event.target.closest('.faq__item');

        faqItems.forEach(faqItem => {
            if (faqItem !== item) {
                faqItem.classList.remove('active');
            }
        })

        item.classList.toggle('active');
    })
})