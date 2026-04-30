const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          return VAR_1;
        };
        function FUNCTION_2() {
          this.VAR_2 = FUNCTION_1;
        }
        var VAR_3 = new FUNCTION_2();
        console.log(VAR_3.VAR_2("a"));
    }
};