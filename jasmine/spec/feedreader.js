/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */


$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //Fetch all urls and check if they are defined and the length of string not equal to zero
        it('all urls are defined', function() {
            for(var i = 0 ; i < allFeeds.length ; i++){
                var feed = allFeeds[i];
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });
        //Fetch all names and check if they are defined and the length of string not equal to zero
        it('all names are defined', function() {
            for(var i = 0 ; i < allFeeds.length ; i++){
                var feed = allFeeds[i];
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });

    describe('The menu', function() {

        //checking if menu is hidden by default by check if body tag has class menu-hidden or not
        it('menu is hidden by default', function() {
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

        //check if menu changes when clicked and hidden when clicked again
        it('the menu changes visibility when the menu icon is clicked', function() {
            $(".menu-icon-link").click();
            expect($("body").hasClass("menu-hidden")).toBe(false);
            $(".menu-icon-link").click();
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

    });

    describe('Initial Entries', function() {
        //load feed first then check if the length of entires are not equal to zero
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('there is at least an entry in feed', function () {
            expect($('.feed .entry').length).not.toBe(0);   
        });
    });

    describe('New Feed Selection', function() {
        //fetch entries feed for two sites and check if content changes or remain the same
        var entries1;
        var entries2;
        beforeEach(function (done) {
            loadFeed(0, function () {
            entries1 = $('.feed').html();
            loadFeed(2, function () {
                entries2 = $('.feed').html();
                done();
            });
        });
                
        });
        it('content actually changes between feeds', function () {
                expect(entries1).not.toEqual(entries2);   
        });
    });
    
}());
