const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {};
        FUNCTION_1.prototype.VAR_6 = { KEY_1: "test" };
        FUNCTION_1.prototype.VAR_7 = { KEY_2: "test" };
        FUNCTION_1.prototype.VAR_8 = { KEY_3: "test" };
        var VAR_9 = new FUNCTION_1();
    }
};