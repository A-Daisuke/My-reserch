const Benchmark = {
    run: function() {
        String.prototype.FUNCTION_1 = function () {
          return this.split("").reverse().join("");
        };
        String.prototype.FUNCTION_2 = function () {
          return Array.prototype.slice.call(this).reverse().join("");
        };
        var VAR_1 = "I'm running out of string names. Good thing we're almost done";
        VAR_1.FUNCTION_2();
    }
};