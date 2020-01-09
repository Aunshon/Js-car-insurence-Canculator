// //Variable
// const formSubmit = document.getElementById('request-quote');
// const make = document.getElementById('make');
// const year = document.getElementById('year');
// const result = document.getElementById('result');
// const loading = document.querySelector('#loading img');
// const html = new HTML();



// //Event Listener
// document.addEventListener('DOMContentLoaded', function() {
//     html.displayYears();
//     formSubmit.addEventListener('submit', function(e) {
//         e.preventDefault();
//         let place = make.value;
//         let thisYear = year.value
//         let myLevel = document.querySelector('input[name="level"]:checked').value;
//         if (place == '' || thisYear == '' && myLevel == '') {
//             html.displayError("Please Fill Up All The Fields");
//         } else {
//             var resDiv = document.querySelector('#result div');
//             if (resDiv != null) {
//                 resDiv.remove();
//             }
//             const insurance = new Insurance(place, thisYear, myLevel);
//             var price = insurance.calculation(insurance);
//             // console.log(insurance);
//             // html.showResult(price);
//         }


//     });
// });



// //Objects
// function HTML() {}

// function Insurance(place, year, level) {
//     this.place = place;
//     this.year = year;
//     this.level = level;
// }
// Insurance.prototype.calculation = function(insurance) {
//     let price;
//     let base = 2000;
//     let make = insurance.place;
//     switch (make) {
//         case '1':
//             price = base * 1.15;
//             break;
//         case '2':
//             price = base * 1.05;
//             break
//         case '3':
//             price = base * 1.35;
//             break;

//     }
//     var difference = this.getYearDifference(insurance.year);
//     //each year price decrease 3%
//     price = price - ((difference * 3) * price) / 100;
//     price = this.getPriceAsLevel(insurance.level, price);
//     html.showResult(price, insurance);
// }
// Insurance.prototype.getYearDifference = function(year) {
//     return new Date().getFullYear() - year;
// }
// Insurance.prototype.getPriceAsLevel = function(level, price) {
//     if (level == 'basic') {
//         return price * 1.30;
//     } else {
//         return price * 1.50;
//     }
//     // return price * 1.30;
// }

// HTML.prototype.displayYears = function() {
//     const thisYear = new Date().getFullYear();
//     const minYear = thisYear - 20;
//     for (let i = thisYear; i >= minYear; i--) {
//         const option = document.createElement('option');
//         const selectOption = document.getElementById('year');
//         option.value = i;
//         option.textContent = i;
//         selectOption.appendChild(option);
//     }
// }
// HTML.prototype.displayError = function(message) {
//     const di = document.createElement('div');
//     di.classList = 'error';
//     di.innerHTML = `<p>${message}</p>`;
//     formSubmit.insertBefore(di, document.getElementById('form-group'));
//     setInterval(function() {
//         const errorDiv = document.querySelector('.error');
//         errorDiv.remove();
//     }, 3000);
// }
// HTML.prototype.showResult = function(price, insurance) {
//     let res = document.createElement('div');
//     var make = insurance.place;
//     switch (make) {
//         case '1':
//             make = "America"
//             break;
//         case '2':
//             make = "Asian"
//             break;
//         case '3':
//             make = "Europian"
//             break;

//         default:
//             break;
//     }

//     loading.style.display = "block";
//     setTimeout(function() {
//         loading.style.display = "none";

//         res.innerHTML =
//             `<p class="header">Summary</p>
//         <p>Make : ${make}</p>
//         <p>Year : ${insurance.year}</p>
//         <p>Level : ${insurance.level}</p>
//         <p>Total : $${price}</p>`;
//         result.appendChild(res);
//     }, 2000);
// }





//object
// function HTML() {}

// function Insurance(level, year, make) {
//     this.level = level;
//     this.year = year;
//     this.make = make;
// }
class Insurance {
    constructor(level, year, make) {
        this.level = level;
        this.year = year;
        this.make = make;
    }
    calculatePrice(insurance) {
        var base = 2000;
        var difference = this.getYearDifference(insurance.year);
        var make = insurance.make;
        var price;
        switch (make) {
            case '1':
                price = base * 1.15;
                break;
            case '2':
                price = base * 1.05;
                break;
            case '3':
                price = base * 1.35;
                break;

            default:
                break;
        }
        price = price - ((difference * 3) * price) / 100;
        price = this.getPriceByLevel(price, insurance.level);
        return price;


    }
    getYearDifference(thisYear) {
        return new Date().getFullYear() - thisYear;
    }
    getPriceByLevel(price, level) {
        if (level == "basic") {
            return price * 1.30;
        } else {
            return price * 1.50;
        }
    }

}


class HTML {

    displayYears() {
        var thisYear = new Date().getFullYear();
        var yearStart = thisYear - 20;
        for (var i = thisYear; i >= yearStart; i--) {
            var option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            year.appendChild(option);
        }
    }

    diaplayError(data) {
        var divElement = document.createElement('div');
        divElement.classList = 'error';
        divElement.innerHTML = `<p>${data}</p>`;
        form.insertBefore(divElement, document.getElementById('err'));
        setTimeout(function() {
            document.querySelector('.error').remove();
        }, 3000);
    }

    showResult(price, insurance) {
        var loading = document.querySelector('#loading img');
        console.log(loading);

        loading.style.display = "block";
        setTimeout(function() {
            loading.style.display = 'none';
            var res = document.createElement('div');
            res.classList = 'finalRes';
            res.innerHTML = `
            <p class='header'>Summary</p>
            <p>Lavel : ${insurance.level}</p>
            <p>Year : ${insurance.year}</p>
            <p>make : ${insurance.make}</p>
            <p>Total : ${price}</p>
        `;
            result.appendChild(res);
        }, 3000);
    }
}

//variable
var html = new HTML();
var year = document.getElementById('year');
var form = document.getElementById('request-quote');
var make = document.getElementById('make');
var result = document.getElementById('result');


//event listener
document.addEventListener('DOMContentLoaded', function() {
    html.displayYears();
});
document.addEventListener('submit', function(e) {
    e.preventDefault();
    var levelValue = document.querySelector('input[name="level"]:checked').value;
    var yearValue = year.value;
    var makeValue = make.value;

    if (levelValue == "" || yearValue == "" || makeValue == "") {
        html.diaplayError("Please fill Up all the fields");
    } else {
        var finalRes = document.querySelector('.finalRes');
        if (finalRes != null) {
            finalRes.remove();
        }
        var insurance = new Insurance(levelValue, yearValue, makeValue);
        var price = insurance.calculatePrice(insurance);
        html.showResult(price, insurance);
    }
});