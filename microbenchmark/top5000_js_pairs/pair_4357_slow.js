const Benchmark = {
    run: function() {
        var FUNCTION_1 = function FUNCTION_1() {
          this.VAR_1 = "hello world";
        };
        FUNCTION_1.prototype.FUNCTION_2 = function () {
          console.log(this.VAR_1);
        };
        new FUNCTION_1().FUNCTION_2();
    }
};