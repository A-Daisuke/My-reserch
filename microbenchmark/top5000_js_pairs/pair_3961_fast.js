const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = [];
          this.VAR_1["norm"] = [];
          this.FUNCTION_3 = function (VAR_7) {
            var VAR_8 = this.VAR_1["norm"];
            for (var VAR_5 = 0; VAR_5 < VAR_7; VAR_5 += 3) {
              VAR_8.push(VAR_5);
              VAR_8.push(VAR_5 + 1);
              VAR_8.push(VAR_5 + 2);
            }
          };
          this.FUNCTION_3(1000);
          return this;
        }
        var VAR_6 = new FUNCTION_1();
    }
};