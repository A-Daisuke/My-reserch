const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = "a";
          this.VAR_2 = "b";
          this.FUNCTION_2 = function () {
            return VAR_1 + VAR_2;
          };
          this.FUNCTION_3 = function () {
            return this.FUNCTION_2();
          };
        }
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) VAR_4 = new FUNCTION_1();
    }
};