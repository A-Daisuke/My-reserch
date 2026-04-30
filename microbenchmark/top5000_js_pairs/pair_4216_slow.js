const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          this.VAR_2 = new (function () {
            this.VAR_3 = new (function () {
              this.VAR_4 = "You've entered bad data: " + VAR_1;
            })();
            this.VAR_5 = new (function () {
              this.VAR_4 = "A standard Message";
            })();
          })();
        }
        var VAR_6 = new FUNCTION_1("badNumber").VAR_2.VAR_3
          .VAR_4;
    }
};