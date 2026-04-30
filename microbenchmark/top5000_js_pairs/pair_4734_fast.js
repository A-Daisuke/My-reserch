const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {};
        FUNCTION_1.prototype.VAR_1 = { KEY_1: "test" };
        FUNCTION_1.prototype.VAR_3 = { KEY_2: "test" };
        FUNCTION_1.prototype.VAR_4 = { KEY_3: "test" };
        var VAR_5 = new FUNCTION_1();
    }
};