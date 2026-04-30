const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = [];
          this.VAR_1["norm"] = [];
          this.FUNCTION_3 = function (VAR_2, VAR_3) {
            for (var VAR_5 = 0; VAR_5 < VAR_3; VAR_5 += 3) {
              VAR_2.push(VAR_5);
              VAR_2.push(VAR_5 + 1);
              VAR_2.push(VAR_5 + 2);
            }
          };
          this.FUNCTION_3(this.VAR_1["norm"], 1000);
          return this;
        }
        var VAR_6 = new FUNCTION_1();
    }
};