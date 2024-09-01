const numberOfItems = document.querySelectorAll('.item');
console.log ('Number of categories :', numberOfItems.length);

numberOfItems.forEach(item => {
    const title = item.querySelector('h2').textContent;
    console.log(`Category: ${title}`);

    const elementsInItems = item.querySelectorAll('li').length;
    console.log(`Elements: ${elementsInItems}`);
});









