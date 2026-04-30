const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = [];
          this.VAR_1["norm"] = [];
          this.VAR_2 = this.VAR_1["norm"];
          this.FUNCTION_2 = function (VAR_3) {
            for (var VAR_4 = 0; VAR_4 < VAR_3; VAR_4 += 3) {
              this.VAR_2.push(VAR_4);
              this.VAR_2.push(VAR_4 + 1);
              this.VAR_2.push(VAR_4 + 2);
            }
          };
          this.FUNCTION_2(1000);
          return this;
        }
        var VAR_5 = new FUNCTION_1();
    }
};