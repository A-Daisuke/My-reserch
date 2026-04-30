const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2;
          this.FUNCTION_2 = function (VAR_3) {
            VAR_1 = VAR_3;
          };
          this.FUNCTION_3 = function () {
            return VAR_1;
          };
          this.FUNCTION_4 = function () {
            return VAR_2;
          };
          this.FUNCTION_5 = function (VAR_4) {
            if (
              typeof VAR_4 == "string" &&
              (VAR_4.toLowerCase() == "male" || VAR_4.toLowerCase() == "female")
            ) {
              VAR_2 = VAR_4;
            }
          };
        }
        var VAR_5 = new FUNCTION_1("fish");
    }
};