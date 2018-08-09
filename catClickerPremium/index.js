//Premuim
window.onload = function () {
    var sectionCat = document.querySelector('.cat');
    var countClick = document.querySelector('.count');
    var img = document.createElement('img');
    var catName = document.querySelector('.name');
    var list = document.querySelectorAll('li');
    var save = document.querySelector('.save');

    /*
         BUTON ADDEVENTLISTENER  open || close
    */
    var admin = document.querySelector('.admin');
    var form = document.querySelector('.form-cat');
    var cancel = document.querySelector('.cancel');
    admin.addEventListener('click', function (e) {
        e.preventDefault();
        form.style.display = "block";
    });
    cancel.addEventListener('click', function (e) {
        e.preventDefault();
        form.style.display = "none";

    });
    /*
     === VIEW  LIST===
    */

    var viewCatList = {
        init: function () {
            var inputName = document.querySelector('#name--js');
            list.forEach(function (li, index) {
                li.addEventListener('click', function () {
                    octopus.addNewImg(index);
                    save.addEventListener('click', function (e) {
                        e.preventDefault();
                        octopus.addNewLiName(index, li);
                        form.style.display = "none";
                    });
                });
            });
        },
        render: function () {
            sectionCat.appendChild(img);
        }
    };

    /*
     === VIEW CLICK ===
    */

    var viewCatClick = {
        init: function () {
            var imgCat = document.querySelector('img');
            img.addEventListener('click', function () {
                octopus.addClick(img.getAttribute('data-id'));
            })
        },
        render: function (index) {
            octopus.addNewImg(img.getAttribute('data-id'));
        }
    };

    /*
     === VIEW FORM ===
    */
    var viewForm = {
        init: function () {
            var inputName = document.querySelector('#name--js');
            var inputSrc = document.querySelector('#src--js');
            var inputLike = document.querySelector('#like--js');
            save.addEventListener('click', function (e) {
                e.preventDefault();
                octopus.addNewName(inputName, img.getAttribute('data-id'));
                octopus.addNewSrc(inputSrc, img.getAttribute('data-id'));
                octopus.addNewLike(inputLike, img.getAttribute('data-id'));
                form.style.display = "none";
            });
        }
    };

    /*
     === MODAL ===
    */
    var data = {
        catClick: [0, 0, 0, 0, 0, 0, 0, 0],
        catName: ['cat one', 'cat two', 'cat three', 'cat four', 'cat five', 'cat six', 'cat seven', 'cat eight'],
        catImg: ['images/cat_1.jpg', 'images/cat_2.jpg', 'images/cat_3.jpg', 'images/cat_4.jpg', 'images/cat_5.jpg', 'images/cat_6.jpg', 'images/cat_7.jpg', 'images/cat_8.jpg'],
        init: function (elem) {
            if (elem) {
                return elem.value;
            }
        }
    };

    /*
     ===   OCTOPUS ===
    */

    var octopus = {
        addNewImg: function (index) {
            img.setAttribute('alt', 'cat');
            img.setAttribute('src', data.catImg[index]);
            img.setAttribute('data-id', index);
            catName.innerHTML = data.catName[index];
            countClick.innerHTML = data.catClick[index] + '<span class="like">❤</span>';
            viewCatList.render();
        },

        addClick: function (index) {
            data.catClick[index]++ ;
            viewCatClick.render(index);
        },

        // change name cat
        addNewName: function (elem, index) {
            if (data.init(elem) !== "") {
                data.catName[index] = data.init(elem);
                catName.innerHTML = data.catName[index];
            }
        },

        // change  list name cat
        addNewLiName: function (index, li) {
            li.innerText = data.catName[index];
        },

        // change src
        addNewSrc: function (elem, index) {
            if (data.init(elem) !== "") {
                data.catImg[index] = data.init(elem);
                img.setAttribute('src', data.catImg[index]);
            }
        },

        // change like
        addNewLike: function (elem, index) {
            if (data.init(elem) !== "") {
                data.catClick[index] = data.init(elem);
                countClick.innerHTML = data.catClick[index] + '<span class="like">❤</span>';
            }
        },
        init: function () {
            data.init();
            viewCatList.init();
            viewCatClick.init();
            viewForm.init();
        }
    };
    octopus.init();
};

