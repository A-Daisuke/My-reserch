const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = [];
          this.VAR_1["norm"] = [];
          this.FUNCTION_3 = function (VAR_7, VAR_8) {
            var VAR_9 = this.VAR_1[VAR_7];
            for (var VAR_5 = 0; VAR_5 < VAR_8; VAR_5 += 3) {
              VAR_9.push(VAR_5);
              VAR_9.push(VAR_5 + 1);
              VAR_9.push(VAR_5 + 2);
            }
          };
          this.FUNCTION_3("norm", 1000);
          return this;
        }
        var VAR_6 = new FUNCTION_1();
    }
};