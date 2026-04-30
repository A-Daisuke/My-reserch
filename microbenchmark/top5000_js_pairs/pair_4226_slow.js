const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = [];
          this.VAR_1["norm"] = [];
          this.FUNCTION_2 = function (VAR_2, VAR_3, VAR_4) {
            this.VAR_1["norm"].push(VAR_2);
            this.VAR_1["norm"].push(VAR_3);
            this.VAR_1["norm"].push(VAR_4);
          };
          for (var VAR_5 = 0; VAR_5 < 1000; VAR_5 += 3) {
            this.FUNCTION_2(VAR_5, VAR_5 + 1, VAR_5 + 2);
          }
          return this;
        }
        var VAR_6 = new FUNCTION_1();
    }
};