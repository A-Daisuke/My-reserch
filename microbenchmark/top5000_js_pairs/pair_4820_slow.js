const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          this.VAR_3 = VAR_1;
          this.VAR_4 = VAR_2;
          this.FUNCTION_2 = function () {
            return [self.VAR_3, self.VAR_4].join(" ");
          };
          this.FUNCTION_3 = function (VAR_5) {
            return "Why, hello " + VAR_5.FUNCTION_2() + "!";
          };
        }
        new FUNCTION_1("Mr.", "Frederick");
        new FUNCTION_1("Ms.", "Jones");
    }
};