
(function (global) {
    let root = document.getElementById('results');
    const result = function (text, pass) {
        const el = document.createElement('li');
        el.textContent = text;
        pass !== undefined && (el.style.color = pass ? 'green' : 'red');
        return el;
    }
    let assert = function (pass, message) {
        return root.appendChild(result(message, pass))
    };
    global.assert = assert;

    function test(description, testBlock) {
        let originalAssert = assert;
        let parent = assert(undefined, description)
            .appendChild(document.createElement('ul'));

        global.assert = function (pass, message) {
            return parent.appendChild(result(message, pass))
        }
        let originalSetTimeout = global.setTimeout;

        function setTimeout(...params) {
            const timeInterval = params[1];
            let pass, message;
            let testGlobalAssert = global.assert;
            if (params.length > 2) {
                pass = params[2];
                message = params[3];
            } else {
                global.assert = (pass, message) => {
                    global.pass = pass;
                    global.message = message;
                };
                params[0]();
                pass = global.pass;
                message = global.message;
            }
            function assert(pass, message) {
                return parent.appendChild(result(message, pass));
            }
            originalSetTimeout(() => assert(pass, message), timeInterval);
            global.assert = testGlobalAssert;
        }
        global.setTimeout = setTimeout;
        testBlock();

        global.assert = originalAssert;
        global.setTimeout = originalSetTimeout

    }
    global.test = test;
})(window);