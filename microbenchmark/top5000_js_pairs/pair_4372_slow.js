const Benchmark = {
    run: function() {
        function FUNCTION_1() {}
        FUNCTION_1.prototype.FUNCTION_2 = function () {
          console.log("text");
        };
        new FUNCTION_1().FUNCTION_2();
    }
};