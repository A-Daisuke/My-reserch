const Benchmark = {
    run: function() {
        function FUNCTION_1() {}
        FUNCTION_1.prototype.FUNCTION_2 = function () {};
        FUNCTION_1.FUNCTION_3 = function () {};
        function FUNCTION_4() {}
        var FUNCTION_5 = function () {};
        for (var VAR_2 = 100000; VAR_2 >= 0; VAR_2--) FUNCTION_5();
    }
};