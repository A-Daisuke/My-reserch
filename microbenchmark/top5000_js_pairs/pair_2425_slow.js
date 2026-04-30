const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = 1;
          this.VAR_2 = 2;
          this.VAR_3 = 3;
          this.FUNCTION_2 = function () {
            return 1;
          };
          this.FUNCTION_3 = function () {
            return 1;
          };
          this.FUNCTION_4 = function () {
            return 1;
          };
          this.FUNCTION_5 = function () {
            return 1;
          };
          this.FUNCTION_6 = function () {
            return 1;
          };
        }
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          new FUNCTION_1();
        }
    }
};