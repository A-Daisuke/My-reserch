const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.FUNCTION_2 = function () {
            console.log("1");
          };
        }
        var VAR_1 = new FUNCTION_1();
        VAR_1.FUNCTION_2();
    }
};