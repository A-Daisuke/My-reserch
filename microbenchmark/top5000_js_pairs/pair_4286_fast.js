const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = [];
          this.VAR_1["norm"] = [];
          this.FUNCTION_2 = function (VAR_3, VAR_4) {
            for (var VAR_6 = 0; VAR_6 < VAR_4; VAR_6 += 3) {
              VAR_3.push(VAR_6);
              VAR_3.push(VAR_6 + 1);
              VAR_3.push(VAR_6 + 2);
            }
          };
          this.FUNCTION_2(this.VAR_1["norm"], 1000);
          return this;
        }
        var VAR_7 = new FUNCTION_1();
    }
};