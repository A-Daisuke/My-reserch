const Benchmark = {
    run: function() {
        function FUNCTION_2() {}
        FUNCTION_2.prototype.FUNCTION_1 = function () {
          console.log("Hello World");
        };
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          VAR_1.push(new FUNCTION_2());
        }
    }
};