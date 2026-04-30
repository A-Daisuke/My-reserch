const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = [];
          this.VAR_1["norm"] = [];
          this.FUNCTION_3 = function (VAR_6, VAR_7, VAR_8) {
            var VAR_9 = this.VAR_1["norm"];
            VAR_9.push(VAR_6);
            VAR_9.push(VAR_7);
            VAR_9.push(VAR_8);
          };
          for (var VAR_4 = 0; VAR_4 < 1000; VAR_4 += 3) {
            this.FUNCTION_3(VAR_4, VAR_4 + 1, VAR_4 + 2);
          }
          return this;
        }
        var VAR_5 = new FUNCTION_1();
    }
};