const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          this.VAR_3 = VAR_1;
          this.VAR_4 = VAR_2;
        }
        FUNCTION_1.prototype.FUNCTION_2 = function () {
          console.log(this.VAR_3);
        };
        FUNCTION_1.prototype.FUNCTION_3 = function () {
          return this.VAR_4 >= 18;
        };
        var VAR_5 = new FUNCTION_1("Kylo Ren", 21);
    }
};