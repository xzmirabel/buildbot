/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// test goal: checks the capability to navigate on about web page
// to use previous and next link

const workerPage = require('./pages/worker.js');
const settingsPage = require('./pages/settings.js');

describe('', function() {
    let worker = null;
    let builder = null;
    let settings = null;

    beforeEach(function() {
        worker = new workerPage('runtests');
        return settings = new settingsPage('runtests');
    });

    describe('check worker page', () =>
        it('should navigate to the worker page, check the one builder inside', function() {
            settings.goSettings();
            settings.changeShowWorkerBuilders(true);
            settings.checkShowWorkerBuilders(true);
            worker.goWorker();
            worker.checkWorkerPage();
            worker.checkHrefPresent();
            builder = worker.goBuilderLink('slowruntests');
            return builder.checkBuilderURL();
        })
    );

    return describe('check worker page', () =>
        it('should navigate to the worker page, check the one builder inside', function() {
            settings.goSettings();
            settings.changeShowWorkerBuilders(true);
            settings.checkShowWorkerBuilders(true);
            worker.goWorker();
            worker.checkWorkerPage();
            worker.checkHrefPresent();
            builder = worker.goBuilderLink('runtests');
            return builder.checkBuilderURL();
    })
);

});
