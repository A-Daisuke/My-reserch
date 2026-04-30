const Benchmark = {
    run: function() {
        var VAR_1;
        function FUNCTION_1() {
          var VAR_2 = "this is property",
            VAR_3 = 0;
          this.FUNCTION_2 = function () {
            return VAR_2;
          };
          this.FUNCTION_3 = function (VAR_4) {
            VAR_2 = VAR_4;
          };
          this.FUNCTION_4 = function () {
            VAR_3++;
          };
        }
        var VAR_5 = new FUNCTION_1();
        VAR_5.FUNCTION_3("this is another value");
        VAR_1 = VAR_5.FUNCTION_2();
        VAR_5.FUNCTION_4();
    }
};