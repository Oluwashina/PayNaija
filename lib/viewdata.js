
// Where Ip connection is kept

function ViewData() {}

ViewData.prototype.ControllerRouteURL = "https://paynaija.herokuapp.com/";
// ViewData.prototype.ControllerRouteURL = "http://192.168.1.140:4000/";
ViewData.prototype.CountriesURL = "https://api.first.org/data/v1/countries";

ViewData.prototype.storeUserDetails = function(key, value) { $.cookie(key, value) };
ViewData.prototype.getStoredUserDetail = function(key) { return $.cookie(key) };
ViewData.prototype.deleteStoredUserDetail = function(key) { $.removeCookie(key) };
ViewData.prototype.clearUserDetails = function() {
    var cookies = $.cookie();
    for (var cookie in cookies) {
        $.removeCookie(cookie);
    }
};