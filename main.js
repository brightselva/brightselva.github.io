var app = angular.module("myApp", ["ngRoute"]);

app.controller("controller", ['$scope', function($scope) {
    $scope.item = {
        "mainimg" : "../assets/explore-business.jpg",
        "navhome" : "HOME",
        "navabout" : "ABOUT",
        "navportfolio" : "PORTFOLIO",
        "navfeatures" : "FEATURES",
        "navsignup" : "SIGN UP",
        "navsearch" : "SEARCH",
        "register" : "Register",
        "title1" : "Angular JS",
        "title2" : "Routing example in Angular JS...",
        "title3" : "Buisness Registration platform.",
        "card1title" : "Experienced Team",
        "card1content" : "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "card1img" : "../assets/explore-business.jpg",
        "card2title" : "Investment",
        "card2content" : "Some quick example text to build on the card title and make up the bulk of the card's content. Some more quick example text for the card's content.",
        "card2img" : "../assets/investment.jpg",
        "card3title" : "Trading",
        "card3content" : "Some quick example text to make up the bulk of the card's content.",
        "card3img" : "../assets/trading.jpg",
        "travel" : "Travel",
        "learning" : "Learning",
        "entertainment" : "Entertainment",
        "guide" : "Guide",
        "civil" : "Construction",
        "investment" : "Investment",
        "feature1content" : "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "feature2content" : "Some quick example text to build on the card title and make up the bulk of the card's content. Some more quick example text for the card's content." 
    },
    $scope.names = [
        'Vanguard',
        'Black Rock',
        'Heiniken',
        'Budweiser',
        'Omega',
        'Deloitte',
        'Johnny Walker',
        'Maersk'
    ];
}]);

    app.config(function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl : "intro.html"
        })
        .when("/portfolio", {
            templateUrl : "portfolio.html"
        })
        .when("/signup", {
            templateUrl : "signup.html"
        })
        .when("/register", {
            templateUrl : "registrationsuccessfull.html"
        })
        .when("/about", {
            templateUrl : "about.html"
        })
        .when("/features", {
            templateUrl : "features.html"
        })
        .when("/search", {
            templateUrl : "search.html"
        });
    });


function validateForm() {
    let a = document.forms["registrationForm"]["bname"].value;
    let b = document.forms["registrationForm"]["bemail"].value;
    let c = document.forms["registrationForm"]["bnumber"].value;
    let d = document.forms["registrationForm"]["baddress"].value;
    if (a != null && b != null && c != null && d != null) {
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
    }
}

