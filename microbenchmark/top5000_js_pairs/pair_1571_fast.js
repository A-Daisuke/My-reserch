const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          this.VAR_2 = VAR_1;
          this.FUNCTION_2 = function () {
            return "Hallo verden fra " + this.VAR_2;
          };
        }
        function FUNCTION_3(VAR_3) {
          this.VAR_2 = VAR_3;
        }
        FUNCTION_3.prototype.FUNCTION_4 = function () {
          return "Hallo verden fra " + this.VAR_2;
        };
        var VAR_4 = 10000,
          VAR_5 = new FUNCTION_1("Thomas");
        while (VAR_4--) {
          VAR_5.FUNCTION_2();
        }
    }
};