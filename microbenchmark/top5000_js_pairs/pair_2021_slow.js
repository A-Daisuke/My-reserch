const Benchmark = {
    run: function() {
        FUNCTION_1 = function (VAR_1, VAR_2, VAR_3) {
          this.VAR_4 = VAR_1 || 0;
          this.VAR_5 = VAR_2 || 0;
          this.VAR_6 = VAR_3 || this.VAR_5;
        };
        for (var VAR_7 = 0; VAR_7 < 5000; VAR_7++) {
          var VAR_8 = new FUNCTION_1(VAR_7, VAR_7, VAR_7);
          if (VAR_8.VAR_5 % 1000 === 0) {
            console.log("test");
          }
        }
    }
};